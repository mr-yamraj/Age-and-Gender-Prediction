# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
import os
import cv2
import dlib
import numpy as np
import argparse
import tensorflow
from wide_resnet import WideResNet
from keras.utils.data_utils import get_file
import keras.backend as K

# Create your views here.
def index(request):
	print "index"
	
	return render(request, 'index.html')

@csrf_exempt
def validate(request):
	value = request.FILES['image']
	fs = FileSystemStorage()
	fs.delete("test.jpg")
	filename = fs.save("test.jpg", value)
	uploaded_file_url = fs.url(filename)
	print uploaded_file_url
	label = prediction(uploaded_file_url)
	try:
		data = {
		'age': label.split(',')[0],
		'gender' : label.split(',')[1]
		}
	except:
		data = {
		'age': '0',
		'gender' : 'M'
		}		
	return JsonResponse(data)

def prediction(uploaded_file_url):
	depth = 16
	k = 8
	weight_file = "data/weights.18-4.06.hdf5"
	detector = dlib.get_frontal_face_detector()
	img_size = 64
	model = WideResNet(img_size, depth=depth, k=k)()
	model.load_weights(weight_file)
	img = cv2.imread(uploaded_file_url[1:])
	input_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
	img_h, img_w, _ = np.shape(input_img)
	detected = detector(input_img, 1)
	faces = np.empty((len(detected), img_size, img_size, 3))
	for i, d in enumerate(detected):
		x1, y1, x2, y2, w, h = d.left(), d.top(), d.right() + 1, d.bottom() + 1, d.width(), d.height()
		xw1 = max(int(x1 - 0.4 * w), 0)
		yw1 = max(int(y1 - 0.4 * h), 0)
		xw2 = min(int(x2 + 0.4 * w), img_w - 1)
		yw2 = min(int(y2 + 0.4 * h), img_h - 1)
		cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 0), 2)
		# cv2.rectangle(img, (xw1, yw1), (xw2, yw2), (255, 0, 0), 2)
		faces[i,:,:,:] = cv2.resize(img[yw1:yw2 + 1, xw1:xw2 + 1, :], (img_size, img_size))
	# print img_h, img_w
	if len(detected) > 0:
		# predict ages and genders of the detected faces
		results = model.predict(faces)
		predicted_genders = results[0]
		ages = np.arange(0, 101).reshape(101, 1)
		predicted_ages = results[1].dot(ages).flatten()
	# draw results
	K.clear_session()
	for i, d in enumerate(detected):
		label = "{}, {}".format(int(predicted_ages[i]), "F" if predicted_genders[i][0] > 0.5 else "M")
		return label