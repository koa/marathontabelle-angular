import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhaseData} from '../../interfaces/phaseData';
import {Milestone} from '../../interfaces/milestone';
import {Category} from '../../interfaces/category';
import {PhaseCategoryEntry} from '../../interfaces/phase-category-entry';

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
  @Input() categories: Category[];

  @Output() update = new EventEmitter<PhaseData>();

  displayedMilestoneColumns: string[] = ['type', 'index', 'position', 'showOnTableButton', 'showOnSmallSheetButton', 'deleteButton', 'upButton', 'downButton'];
  displayedCategoryColumns: string[] = ['category', 'speed', 'speedTime'];

  constructor() {
  }

  ngOnInit() {
  }

  updateMilestone(milestone: Milestone) {
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
    this.update.emit(this.phaseData);
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

  delete(milestone: Milestone) {
    this.phaseData.milestones = this.phaseData.milestones.filter(m => m !== milestone);
    this.updateIndizes();
  }

  up(index: number) {
    const moveElement = this.phaseData.milestones[index];
    const elementBevoreMove = this.phaseData.milestones[index - 1];
    this.phaseData.milestones =
      this.phaseData.milestones.slice(0, index - 1)
        .concat(moveElement, elementBevoreMove)
        .concat(this.phaseData.milestones.slice(index + 1, this.phaseData.milestones.length));
    this.updateIndizes();

  }

  down(index: number) {
    const moveElement = this.phaseData.milestones[index];
    const elementAfterMove = this.phaseData.milestones[index + 1];
    this.phaseData.milestones =
      this.phaseData.milestones.slice(0, index)
        .concat(elementAfterMove, moveElement)
        .concat(this.phaseData.milestones.slice(index + 2, this.phaseData.milestones.length));
    this.updateIndizes();

  }

  toggleTable(milestone: Milestone) {
    milestone.visibleOnTable = !milestone.visibleOnTable;
    this.updateIndizes();
  }

  toggleSmallSheet(milestone: Milestone) {
    milestone.visibleOnSmallSheet = !milestone.visibleOnSmallSheet;
    this.updateIndizes();

  }

  updateCategories(name: string, value: string) {
    // tslint:disable-next-line:radix
    const numberValue = parseInt(value);
    const categoryValues: Map<string, PhaseCategoryEntry> = this.phaseData.categories;
    if (!categoryValues.has(name)) {
      categoryValues.set(name, {
        maxDuration: 0, minDuration: 0, speed: numberValue
      });
    } else {
      categoryValues.get(name).speed = numberValue;
    }
    this.update.emit(this.phaseData);
  }

  calcTimeOfSpeed(category: Category): string {
    const phaseCategoryEntry: PhaseCategoryEntry = this.phaseData.categories.get(category.name);
    console.log('Phase Entry: ' + phaseCategoryEntry);
    if (phaseCategoryEntry == null) {
      return '';
    }
    const duration: number = this.phaseData.length / 1000 / phaseCategoryEntry.speed * 3600;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.round(duration % 60);
    return minutes.toString().padStart(2, '0')
      + ':' +
      seconds.toString().padStart(2, '0')
      ;
  }
}
