import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="selects">
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all">Show All</option>
        <option value="isDone">Show Done</option>
        <option value="notDone" selected="selected">Not Done</option>
      </select>
      <select (change)="onCatChange($event.target.value)" class="filter">
        <option value="All">Show All</option>
        <option value="Home">Home Only</option>
        <option value="Work">Work Only</option>
        <option value="Hobby">Hobby Only</option>
      </select>
    </div>
    <div class="task" *ngFor="let currentTask of childTaskList | completeness: selectedCompleteness | category: selectedCategory">
        <task-display [task]="currentTask"></task-display>
        <button class="btn btn-default"(click)="editButtonHasBeenClicked(currentTask)" >Edit</button>
    </div>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedCategory: string = "All"
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  onCatChange(optionFromMenu) {
    this.selectedCategory = optionFromMenu;
    console.log(this.selectedCategory);
  }
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task){
    this.clickSender.emit(taskToEdit);
  }
}
