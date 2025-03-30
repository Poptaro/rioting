from django.urls import path
from .views import *

urlpatterns = [
    path("<str:game_name>/<str:tag_line>/", Single_User.as_view()),
]
