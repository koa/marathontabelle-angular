import {Component} from '@angular/core';
import {Competition} from './interfaces/competition';
import {Category} from './interfaces/category';
import {Competitor} from './interfaces/competitor';

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

  addCategory(newCategory: Category) {
    console.log(this.competition.categories);
    console.log('New Category: ');
    console.log(newCategory);
    this.competition.categories = this.competition.categories.concat(newCategory);
  }

  deleteCategory(removedCategory: Category) {
    this.competition.categories = this.competition.categories.filter(c => c !== removedCategory);
  }

  addCompetitor(newCompetitor: Competitor) {
    this.competition.comptetitors = this.competition.comptetitors.concat(newCompetitor);
  }
}
