import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {TaskListComponent} from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe} from './completeness.pipe';
import { CategoryPipe} from './category.pipe';
import { TaskComponent } from './task.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    EditTaskComponent,
    NewTaskComponent,
    CompletenessPipe,
    CategoryPipe,
    TaskComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
