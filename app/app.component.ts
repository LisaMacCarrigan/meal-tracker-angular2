import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
    <div class="row">
      <div class="col-xs-6">
        <new-food
          (newFoodSender)="addFood($event)"
        ></new-food>
      </div>
      <div class="col-xs-6">
        <food-list
          [childFoodList]="masterFoodList"
          (clickSender)="showDetails($event)"
        ></food-list>
      </div>
    </div>
    <edit-food
      [childSelectedFood]="selectedFood"
      (doneClickedSender)="finishedEditing()"
    ></edit-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
     new Food("Monday", "Breakfast", "Kombucha", 40, "sparkling probiotic"),
     new Food("Tuesday", "Snack", "Olives", 100, "garlic stuffed")
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
