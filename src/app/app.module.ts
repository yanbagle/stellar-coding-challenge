import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './common-components/dropdown-menu/dropdown-menu.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import {MoviesDbService} from './services/movies-db-service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    ExampleContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MoviesDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
