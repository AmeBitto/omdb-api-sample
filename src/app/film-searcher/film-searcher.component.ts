import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { OmdbService } from '../services/omdb.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-searcher',
  templateUrl: './film-searcher.component.html',
  styleUrls: ['./film-searcher.component.scss']
})
export class FilmSearcherComponent implements OnInit {

  omdbResponse: any;
  waitForResponse = false;

  private _searchTerm = new Subject<string>();

  constructor(private _omdbService: OmdbService,
              private _filmService: FilmService) { }

  ngOnInit() {
    this._searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._omdbService.searchFilms(term))
    ).subscribe(omdbResponse => {
      console.log(omdbResponse);
      this.omdbResponse = omdbResponse;
      this.waitForResponse = false;
    });
  }

  search(term: string): void {
    if (term.length > 0) {
      this.waitForResponse = true;
      this._searchTerm.next(term);
    } else {
      this.omdbResponse = undefined;
    }
  }
}
