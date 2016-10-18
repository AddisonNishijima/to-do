import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component ({
  selector: 'new-task',
  template: `
  <h1>New Task</h1>
  <div class="task">
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input #newId>
    </div>
    <div>
      <select #newCategory>
        <option>Home</option>
        <option>Hobby</option>
        <option>Work</option>
      </select>
      <button class="btn btn-primary" (click)="
        addClicked(newDescription.value, newCategory.value, newId.value);
        newDescription.value='';
        newId.value='';
      ">Add</button>
    </div>
  </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, category: string, id: number){
    var newTaskToAdd: Task = new Task(description, id, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
