import {Milestone} from './milestone';
import {Time} from '@angular/common';
import {PhaseCategoryEntry} from './phase-category-entry';

export interface PhaseData {
  length: number;
  milestones: Milestone[];
  categories: Map<string, PhaseCategoryEntry>;
}
