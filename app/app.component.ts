import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="app-header">
    <div class="header-content">
      <img id="img-header" src="resources/img/icon.png" alt="logo">
      <h1 id="app-title">myFoodiary</h1>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-7 new-food">
        <new-food
          (newFoodSender)="addFood($event)"
        ></new-food>
      </div>
      <div class="col-md-5 food-list">
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
  <div class="footer">
    <p>&copy; 2016 Made By Lisa MacCarrigan</p>
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
