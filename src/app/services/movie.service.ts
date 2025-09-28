import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpclient: HttpClient) {}
  getTrendingMovies() {
    return this.httpclient.get('assets/data/trending-movies.json');
  }

  getTheatreMovies() {
    return this.httpclient.get('assets/data/theatre-movies.json');
  }

  getPoplularMovies() {
    return this.httpclient.get('assets/data/popular-movies.json');
  }
}
