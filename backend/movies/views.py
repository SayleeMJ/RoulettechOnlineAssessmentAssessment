from django.http import JsonResponse
import requests
from django.conf import settings

def movie_list(request):
    """ Fetch a list of movies """
    response = requests.get(f"http://www.omdbapi.com/?s=Batman&apikey={settings.OMDB_API_KEY}")
    return JsonResponse(response.json())  
