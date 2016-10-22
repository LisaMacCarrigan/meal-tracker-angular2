import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], calorieCount) {
    var output: Food[] = [];
    if(calorieCount === "highCal"){
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calories > 500) { // high-calorie foods
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieCount === "lowCal") {
      for (var i = 0; i < input.length; i ++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else { // "all"
      return input;
    }
  }
}
