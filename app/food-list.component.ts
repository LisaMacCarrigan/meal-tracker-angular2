import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h3>Current Food List</h3>
    <hr>
    <div *ngFor="let currentFood of childFoodList">
      <h5>{{ currentFood.name }}
      <button type="button" class="btn btn-default btn-xs" data-toggle="modal" data-target=".bd-example-modal-sm" (click)="editButtonClicked(currentFood)">Edit</button>

      </h5>
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
