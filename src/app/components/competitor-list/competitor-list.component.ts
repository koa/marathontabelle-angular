import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Competitor} from '../../interfaces/competitor';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Time} from '@angular/common';
import {Category} from '../../interfaces/category';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.css']
})
export class CompetitorListComponent implements OnInit {
  @Input() competitors: Competitor[];
  @Input() categories: Category[];
  displayedColumns: string[] = ['name', 'category', 'startPhaseA', 'startPhaseTransfer', 'startPhaseB', 'action'];
  sortedCompetitors = new MatTableDataSource(this.competitors);

  constructor() {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  newCompetitor: Competitor;

  initComptetitor() {
    this.newCompetitor = {
      name: '',
      category: ''
    };
  }

  ngOnInit() {
    this.initComptetitor();
    this.sortedCompetitors.sort = this.sort;
    this.sortedCompetitors.data = this.competitors;
  }

  updateCompetitor(competitor: Competitor) {
    console.log(competitor);
  }

  time2str(t?: Time): string {
    if (t != null) {
      return t.hours + ':' + t.minutes;
    }
    return '';
  }

  update($event) {
    console.log('Event: ' + $event);
  }

  str2time(value: string) {
    const parts = value.split(':', 2);
    if (parts.length < 2) {
      return null;
    }
    return {
      hours: Number.parseInt(parts[0], 10),
      minutes: Number.parseInt(parts[1], 10),
    };
  }

  delete(competitor: Competitor) {
    this.competitors = this.competitors.filter(c => c !== competitor);
    this.sortedCompetitors.data = this.competitors;
  }

  addCompetitor(newCompetitor: Competitor) {

  }

  add(newCompetitor: Competitor) {
    this.competitors.push(newCompetitor);
    this.sortedCompetitors.data = this.competitors;
    this.initComptetitor();
  }
}
