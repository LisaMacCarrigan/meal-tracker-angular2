import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3 *ngFor="let currentFood of foods">{{ currentFood.name }}</h3>
  </div>
  `
})


export class AppComponent {
  public foods: Food[] = [
    new Food("Kombucha", 40, "sparkling probiotic"),
    new Food("Olives", 100, "garlic stuffed")
  ];
}

export class Food {
  constructor(public name: string, public calories: number, public details: string) {   }
}
