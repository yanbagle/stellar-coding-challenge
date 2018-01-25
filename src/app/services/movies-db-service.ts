import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {MoviesDTO} from '../models/Movies_DTO';

@Injectable()
export class MoviesDbService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private key = 'api_key=5b2375a4536e7f3ba1b72fa5943c2700';

  // service comp for consuming MoviesDB service
  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<MoviesDTO> {
    const opts = '&language=en-US&page=1';
    const url = this.url + 'popular?' + this.key + opts;
    return this.httpClient.get<MoviesDTO>(url);
  }

}
