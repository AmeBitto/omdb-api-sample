import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilmSearcherComponent } from './film-searcher/film-searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmInfoComponent,
    NotFoundComponent,
    FilmSearcherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    // Material modules
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
