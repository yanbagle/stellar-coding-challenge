import { Component, OnInit } from '@angular/core';
import {MoviesDbService} from '../services/movies-db-service';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.css']
})
export class ExampleContainerComponent implements OnInit {

  constructor(private moviesService: MoviesDbService) { }

  ngOnInit() {
  }

}
