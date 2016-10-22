import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h3>Add to Food Diary</h3>
  <hr>
  <div class="form-group">
    <label class="food-form-label" for="day-of-week">Select Day</label>
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
    <label class="food-form-label" for="meal-type">Select Meal Type</label>
    <select class="form-control" #newMealType>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
  </div>
  <div class="form-group">
    <label class="food-form-label">Enter Food Name:
    <p class="label-hint">Example: Banana</p>
    <input class="form-control" #newName></label>
  </div>
  <div class="form-group">
    <label class="food-form-label">Enter Calories:
    <p class="label-hint">Example: 105</p>
    <input class="form-control" #newCalories></label>
  </div>
  <div class="form-group">
    <label class="food-form-label">Add Details:
    <p class="label-hint">Example: Organic</p>
    <input class="form-control" #newDetails></label>
  </div>
  <button class="btn btn-default" (click)="
    addClicked(newDay.value, newMealType.value, newName.value, newCalories.value, newDetails.value);
    newDay.value='';
    newMealType.value='';
    newName.value='';
    newCalories.value='';
    newDetails.value='';
    ">Add</button>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(day: string, meal: string, name: string, calories: number, details: string) {
    var newFoodToAdd: Food = new Food(day, meal, name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
