import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from 'src/app/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies: Movie[] = [];
  error: string = '';

  constructor(private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getAllMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
        this.error = '';
      },
      (err) => {
        console.error('Error loading movies', err);
        this.error = 'Error loading movies';
      }
    );
  }
}
