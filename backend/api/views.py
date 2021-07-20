from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response

class TestView(APIView):

    def get(self, request):
        return Response('backend authentication is working')



class ColorSelector(APIView):

    def get(self, request):
        color = request.user.profile.color 
        print("get", request.user)
        return Response(color)

    def post(self, request):
        request.user.profile.color = request.data['payload']
        request.user.profile.save()
        return Response('working')