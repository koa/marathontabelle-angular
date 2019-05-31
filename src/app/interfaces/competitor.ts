import {Time} from '@angular/common';

export interface Competitor {
  name: string;
  category: string;
  startPhaseA?: Time;
  startPhaseTransfer?: Time;
  startPhaseB?: Time;
}
