import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h2>Add Food</h2>
  <hr>
  <div class="form-group">
    <label for="day-of-week">Select Day</label>
    <select class="form-control" #newDay>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
  </div>
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
    addClicked(newDay.value, newName.value, newCalories.value, newDetails.value);
    newDay.value='';
    newName.value='';
    newCalories.value='';
    newDetails.value='';
    ">Add</button>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(day: string, name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(day, name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
