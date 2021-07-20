from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response


class ColorSelector(APIView):

    def get(self, request):
        color = request.user.profile.color 
        return Response(color)

    def post(self, request):
        request.user.profile.color = request.data['payload']
        request.user.profile.save()
        return Response('working')


class BackgroundSelector(APIView):

    def get(self, request):
        background = request.user.profile.background 
        return Response(background)

    def post(self, request):
        print(request.data)
        request.user.profile.background = request.data['payload']
        request.user.profile.save()
        return Response('working')