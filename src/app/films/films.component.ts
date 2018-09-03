import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor(private _omdbService: OmdbService) { }

  ngOnInit() {
    this._omdbService.searchFilms('test')
      .subscribe(result => console.log(result));
  }

}
