import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
    <h3>All Foods</h3>
    <hr>
    <label class="food-form-label">Sort by Calories</label>
    <select class="form-control"  (change)="onSelect($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="highCal">High Calorie</option>
      <option value="lowCal">Low Calorie</option>
    </select>
    <br>
    <ul class="list-group">
      <div *ngFor="let currentFood of childFoodList | calories:selectedCalorieOption">
        <li class="list-group-item">{{ currentFood.name + " | " + currentFood.calories + " kCal" }}
        <button type="button" class="btn btn-default btn-xs edit-button" data-toggle="modal" data-target=".bd-example-modal-sm" (click)="editButtonClicked(currentFood)">Edit</button>
        </li>
      </div>
    </ul>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCalorieOption: string = "all";
  onSelect(optionFromMenu) {
    this.selectedCalorieOption = optionFromMenu;
  }
  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
