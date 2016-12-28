import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <div class="food-title-container">
    <h3>Log New Food</h3>
  </div>
  <div class="form-group">
    <label class="food-form-label" for="day-of-week">Day</label>
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
    <label class="food-form-label" for="meal-type">Meal Type</label>
    <select class="form-control" #newMealType>
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
      <option value="Snack">Snack</option>
    </select>
  </div>
  <div class="form-group">
    <label class="food-form-label">Food
    <input class="form-control" #newName></label>
  </div>
  <div class="form-group">
    <label class="food-form-label">Calories
    <input class="form-control" #newCalories></label>
  </div>
  <div class="form-group">
    <label class="food-form-label">Details
    <input class="form-control" #newDetails></label>
  </div>
  <button class="btn btn-default btn-lg add" (click)="
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
