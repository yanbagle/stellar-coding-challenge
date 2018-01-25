import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContainerComponent } from './example-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MoviesDbService} from '../services/movies-db-service';

class MockMovieService {
  public getPopularMovies(): Observable<any> {
    return Observable.of({results: [{title: 'It'}, {title: 'It 2'}, {title: 'It 3'}]});
  }
}

describe('ExampleContainerComponent', () => {
  let component: ExampleContainerComponent;
  let fixture: ComponentFixture<ExampleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleContainerComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: MoviesDbService, useClass: MockMovieService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
