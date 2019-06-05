import {Component, Input, OnInit} from '@angular/core';
import {PhaseData} from '../../interfaces/phaseData';
import {Milestone} from '../../interfaces/milestone';

@Component({
  selector: 'app-phase-editor',
  templateUrl: './phase-editor.component.html',
  styleUrls: ['./phase-editor.component.css']
})
export class PhaseEditorComponent implements OnInit {

  TYPE_KM = 'km';
  TYPE_OBSTACLE = 'H';
  TYPE_CTF = 'Pt';
  @Input() phaseData: PhaseData;

  newMilestone: Milestone;
  displayedColumns: string[] = ['type', 'index', 'position'];
  private nextMilestone: Milestone;

  constructor() {
    this.newMilestone = {type: 'H', visibleOnSmallSheet: true, visibleOnTable: true, index: 0};
  }

  ngOnInit() {
  }

  update(milestone: Milestone) {
    this.updateIndizes();
  }

  addKm(): void {
    const currentMax: number = Math.max(...this.phaseData.milestones.filter(m => m.type === this.TYPE_KM).filter(m => m.position).map(m => m.position));
    const newPos = Math.floor(currentMax / 1000) + 1;
    this.phaseData.milestones = this.phaseData.milestones.concat({
      position: newPos,
      type: this.TYPE_KM, visibleOnTable: true, visibleOnSmallSheet: true, index: 0
    });
    this.updateIndizes();
  }

  updateIndizes() {
    const currentCounters = new Map();

    this.phaseData.milestones = this.phaseData.milestones.map(e => {
      if (!currentCounters.has(e.type)) {
        currentCounters.set(e.type, 1);
      }
      const index: number = currentCounters.get(e.type);
      e.index = index;
      if (e.type === this.TYPE_KM) {
        e.position = index * 1000;
      }
      currentCounters.set(e.type, index + 1);
      return e;
    });

  }

  addObstacle() {
    this.phaseData.milestones = this.phaseData.milestones.concat({
      type: this.TYPE_OBSTACLE, visibleOnTable: true, visibleOnSmallSheet: true, index: 0
    });
    this.updateIndizes();
  }

  addCtf() {
    this.phaseData.milestones = this.phaseData.milestones.concat({
      type: this.TYPE_CTF, visibleOnTable: true, visibleOnSmallSheet: true, index: 0
    });
    this.updateIndizes();
  }
}
