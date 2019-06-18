import {Component} from '@angular/core';
import {Competition} from './interfaces/competition';
import {Category} from './interfaces/category';
import {Competitor} from './interfaces/competitor';
import {PhaseData} from './interfaces/phaseData';

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
        length: 0, milestones: [], categories: new Map()
      }
      ,
      phaseTransfer: {
        length: 0, milestones: [], categories: new Map()
      },
      phaseB: {length: 0, milestones: [], categories: new Map()}
    };
  }

  store(): void {
    console.log('Store');
    console.log(this.competition);
  }

  addCategory(newCategory: Category) {
    console.log(this.competition.categories);
    console.log('New Category: ');
    console.log(newCategory);
    this.competition.categories = this.competition.categories.concat(newCategory);
    this.store();
  }

  deleteCategory(removedCategory: Category) {
    this.competition.categories = this.competition.categories.filter(c => c !== removedCategory);
    this.store();
  }

  addCompetitor(newCompetitor: Competitor) {
    this.competition.comptetitors = this.competition.comptetitors.concat(newCompetitor);
    this.store();
  }

  updatePhaseA($event: PhaseData) {
    this.competition.phaseA = $event;
    this.store();
  }

  updatePhaseTransfer($event: PhaseData) {
    this.competition.phaseTransfer = $event;
    this.store();
  }

  updatePhaseB($event: PhaseData) {
    this.competition.phaseB = $event;
    this.store();
  }
}
