from django.urls import path
from .views import movie_list, movie_detail

urlpatterns = [
    # This is a URL route, that will match 'movies/' and map it to the movie_list view.
    #It allows us to reference this URL pattern by name in templates and other code with the 'name' parameter.
    path('movies/', movie_list, name='movie-list'),
]
