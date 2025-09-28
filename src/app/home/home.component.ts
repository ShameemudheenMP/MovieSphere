import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any = []
  theatreMovies: any = []
  popularMovies: any = []
  rating = 0;


  constructor(private httpclient : HttpClient, private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.trendingMovies = this.loadTrendingMovies()
    this.theatreMovies = this.loadTheatreMovies()
    this.popularMovies = this.loadPopularMovies()
  }

  loadTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe(data => this.trendingMovies = data);
  }

  loadTheatreMovies() {
    this.movieService.getTheatreMovies().subscribe(data => this.theatreMovies = data);
  }

  loadPopularMovies() {
    this.movieService.getPoplularMovies().subscribe(data => this.popularMovies = data);
  }

  gotToMovieDetails(type: string, id: string) {
    this.router.navigate(['movie', type, id])
  }

}
