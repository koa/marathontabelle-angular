import {Competitor} from './competitor';
import {Category} from './category';
import {PhaseData} from './phaseData';

export interface Competition {
  categories: Category[];
  comptetitors: Competitor[];
  phaseA: PhaseData;
  phaseTransfer: PhaseData;
  phaseB: PhaseData;
}
