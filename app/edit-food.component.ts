import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h2>Edit Food</h2>
      <hr>
      <div class="form-group">
        <label class="food-form-label" for="day-of-week">Select Day</label>
        <select class="form-control"  [(ngModel)]="childSelectedFood.day">
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
        <label class="food-form-label">Select Meal Type:</label>
        <select class="form-control" [(ngModel)]="childSelectedFood.meal">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div class="form-group">
        <label class="food-form-label">Enter Food Name:
        <input class="form-control" [(ngModel)]="childSelectedFood.name"></label>
      </div>
      <div class="form-group">
        <label class="food-form-label">Enter Calories:
        <input class="form-control" [(ngModel)]="childSelectedFood.calories"></label>
      </div>
      <div class="form-group">
        <label class="food-form-label">Add Details:
        <input class="form-control" [(ngModel)]="childSelectedFood.details"></label>
      </div>
      <button class="btn btn-default" (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  @Output() deleteClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
