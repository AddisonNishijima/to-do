import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe ({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], desiredCategory){
  var output: Task[] = [];
  if(desiredCategory !== "All") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === desiredCategory) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
