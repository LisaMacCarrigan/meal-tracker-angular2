import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1>Add Food Item</h1>
  <div class="form-group">
    <label>Enter Food Name:
    <input class="form-control" #newName></label>
  </div>
  <div class="form-group">
    <label>Enter Calories:
    <input class="form-control" #newCalories></label>
  </div>
  <div class="form-group">
    <label>Add Details:
    <input class="form-control" #newDetails></label>
  </div>
  <button class="btn btn-default" (click)="
    addClicked(newName.value, newCalories.value, newDetails.value);
    newName.value='';
    newCalories.value='';
    newDetails.value='';
    ">Add</button>
</div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
