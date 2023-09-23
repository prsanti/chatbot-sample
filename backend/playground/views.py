from django.shortcuts import render
from django.http import HttpResponse

def calcualte():
  x = 1
  y = 2
  return x

def say_hello(request):
  x = calcualte()
  return render(request, "hello.html", {"name": "Paulo"})