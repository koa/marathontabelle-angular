import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: Category[];
  @Output() deleteCategory = new EventEmitter<Category>();
  @Output() addCategory = new EventEmitter<Category>();
  displayedColumns: string[] = ['name', 'action'];
  newCategory: Category;


  constructor() {
    console.log('new category component');
    this.initNewCategory();
  }

  initNewCategory() {
    this.newCategory = {name: ''};
  }

  ngOnInit() {
  }

  delete(category: Category) {
    this.deleteCategory.emit(category);
  }

  add(newCategory: Category) {
    this.addCategory.emit(newCategory);
    this.initNewCategory();
  }
}
