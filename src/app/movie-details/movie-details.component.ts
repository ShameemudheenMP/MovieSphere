import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any = {};
  movieReviews: any = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovieDetails()
  }

  loadMovieDetails() {
    const routeParamMap = this.route.snapshot.paramMap
    let type = routeParamMap.get('type');
    let id = routeParamMap.get('id');

    if (type == 'trending') {
      this.movieService.getTrendingMovies().subscribe((data: any) => {
        this.movieDetails = data.find((movie: any) => movie.id == id);
        this.movieReviews = this.movieDetails?.reviews;
      })
    } else if (type == 'theatre') {
      this.movieService.getTheatreMovies().subscribe((data: any) => {
        this.movieDetails = data.find((movie: any) => movie.id == id);
        this.movieReviews = this.movieDetails?.reviews;
      })
    } else if (type == 'popular') {
      this.movieService.getPoplularMovies().subscribe((data: any) => {
        this.movieDetails = data.find((movie: any) => movie.id == id);
        this.movieReviews = this.movieDetails?.reviews;
      })
    }
  }

}
