import {Component, Input, OnInit} from '@angular/core';
import {PhaseData} from '../../interfaces/phaseData';

@Component({
  selector: 'app-phase-editor',
  templateUrl: './phase-editor.component.html',
  styleUrls: ['./phase-editor.component.css']
})
export class PhaseEditorComponent implements OnInit {

  @Input() phaseData: PhaseData;

  constructor() {
  }

  ngOnInit() {
  }

}
