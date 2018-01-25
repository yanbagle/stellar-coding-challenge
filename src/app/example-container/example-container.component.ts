import { Component, OnInit } from '@angular/core';
import {MoviesDbService} from '../services/movies-db-service';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.css']
})
export class ExampleContainerComponent implements OnInit {

  public dropdownName = 'Popular Movies';
  public dropdownDefault = 'Movies';
  public movieTitles: Movie[];

  constructor(private moviesService: MoviesDbService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((res) => {
      this.setMovies(res.results);
    }, (error) => {
      // handle error response
      this.dropdownName = error.statusMessage;
    });
  }

  public setMovies (results) {
    this.movieTitles = results.map((movie) => {
      return movie.title;
    });
  }

}
