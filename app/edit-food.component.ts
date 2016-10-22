import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h2>Edit Food</h2>
      <hr>
      <div class="form-group">
        <label>Enter Food Name:
        <input class="form-control" [(ngModel)]="childSelectedFood.name"></label>
      </div>
      <div class="form-group">
        <label>Enter Calories:
        <input class="form-control" [(ngModel)]="childSelectedFood.calories"></label>
      </div>
      <div class="form-group">
        <label>Add Details:
        <input class="form-control" [(ngModel)]="childSelectedFood.details"></label>
      </div>
      <button class="btn btn-default" (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
