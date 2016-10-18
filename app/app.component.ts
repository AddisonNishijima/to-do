import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container-fluid">
  <div class="jumbotron">
    <h1>To Do List App Thing</h1>
  </div>
  <div class="row">
    <div class="col-sm-7">
    <h1>Task List: </h1>
    <task-list
        [childTaskList]="masterTaskList"
        (clickSender)="showDetails($event)"
        ></task-list>
    <edit-task
        [childSelectedTask]="selectedTask"
        (doneClickedSender)="finishedEditing()"
        ></edit-task>
        </div>
    <div class="col-sm-5">
      <new-task
          (newTaskSender)="addTask($event)"
      ></new-task>
    </div>
  </div>
  </div>
  `
})


export class AppComponent {
  public masterTaskList: Task[] = [
      new Task("Create To-Do List app.", 0, "Work"),
      new Task("Learn Kung Fu.", 1, "Hobby"),
      new Task("Rewatch all the Lord of the Rings movies.", 2, "Home"),
      new Task("Do the laundry.", 3, "Home")
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
  finishedEditing(){
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
