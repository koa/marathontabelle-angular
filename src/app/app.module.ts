import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { CompetitorListComponent } from './components/competitor-list/competitor-list.component';
import {FormsModule} from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { PhaseEditorComponent } from './components/phase-editor/phase-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitorListComponent,
    CategoriesComponent,
    PhaseEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
