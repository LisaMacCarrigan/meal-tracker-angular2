import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div *ngFor="let currentFood of foods">
      <h3>{{ currentFood.name }}</h3>
      <button class="btn btn-default" (click)="showDetails(currentFood)">Edit</button>
    </div>
    <div *ngIf="selectedFood">
      <h1>Edit Food</h1>
      <div class="form-group">
        <label>Enter Food Name:
        <input class="form-control" [(ngModel)]="selectedFood.name"></label>
      </div>
      <div class="form-group">
        <label>Enter Calories:
        <input class="form-control" [(ngModel)]="selectedFood.calories"></label>
      </div>
      <div class="form-group">
        <label>Enter Food Details:
        <input class="form-control" [(ngModel)]="selectedFood.details"></label>
        <button class="btn btn-default" (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public foods: Food[] = [
    new Food("Kombucha", 40, "sparkling probiotic"),
    new Food("Olives", 100, "garlic stuffed")
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
}

export class Food {
  constructor(public name: string, public calories: number, public details: string) {   }
}