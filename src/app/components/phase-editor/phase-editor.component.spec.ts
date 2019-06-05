import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseEditorComponent } from './phase-editor.component';

describe('PhaseEditorComponent', () => {
  let component: PhaseEditorComponent;
  let fixture: ComponentFixture<PhaseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
