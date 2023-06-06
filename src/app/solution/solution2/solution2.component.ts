import { Component } from '@angular/core';
import {Observable, switchMap} from 'rxjs';
import {Country, State} from './types';
import {CountryService} from './country.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.css']
})
export class Solution2Component {

  countries$: Observable<Country[]> = this.service.getCountries();
  states$: Observable<State[]>;
  countryDropdown = new FormControl<Country['id']>(null);
  statesDropdown = new FormControl<State['code']>(null);

  constructor(private service: CountryService) {
    this.states$ = this.countryDropdown.valueChanges.pipe(
      switchMap(countryId => service.getStatesFor(countryId))
    )
  }
}
