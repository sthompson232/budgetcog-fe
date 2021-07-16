from rest_framework.views import APIView
from rest_framework import authentication, permissions
from rest_framework.response import Response

class TestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response('backend authentication is working')
