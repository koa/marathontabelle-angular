import {Component} from '@angular/core';
import {Competition} from './interfaces/competition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marathontabelle';
  competition: Competition;

  constructor() {
    this.competition = {
      categories: [{name: 'Pony'}, {name: 'Pferd'}],
      comptetitors: [{category: 'Pony', name: 'Fahrer 1'}, {
        category: 'Pony',
        name: 'Fahrer 2',
        startPhaseA: {hours: 10, minutes: 12}
      }],
      phaseA: {
        length: 0
      }, phaseTransfer: {
        length: 0
      }, phaseB: {length: 0}
    };
  }

  store(): void {
    'Hello ';
  }
}
