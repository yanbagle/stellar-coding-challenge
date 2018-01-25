import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DropdownMenuComponent } from './common-components/dropdown-menu/dropdown-menu.component';
import { ExampleContainerComponent } from './example-container/example-container.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    ExampleContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
