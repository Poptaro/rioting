from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import User
from .serializers import UserSerializer
# Create your views here.

class Single_User(APIView):
  def get(self, request, game_name, tag_line):
    user = UserSerializer(get_object_or_404(User, game_name__iexact = game_name, tag_line__iexact = tag_line)).data
    return Response(user)
