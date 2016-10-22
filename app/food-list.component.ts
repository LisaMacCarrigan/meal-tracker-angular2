import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h2>Current Food List</h2>
    <hr>
    <div *ngFor="let currentFood of childFoodList">
      <h4>{{ currentFood.name }}
      <button class="btn btn-default btn-xs" (click)="editButtonClicked(currentFood)">Edit</button>
      </h4>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
