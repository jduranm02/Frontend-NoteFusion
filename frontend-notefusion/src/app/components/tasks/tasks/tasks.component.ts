import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  tasks: any;
  editState: boolean = false;
  taskToEdit: any;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    // this.taskService.getTasks().subscribe(tasks => {
    //   //console.log(tasks);
    //   this.tasks = tasks;
    // });
  }

  deleteTask(event:any, task:any) {
    // const response = confirm('are you sure you want to delete?');
    // if (response ) {
    //   this.taskService.deleteTask(task);
    // }
    // return;
  }

  editTask(event:any, task:any) {
    // this.editState = !this.editState;
    // this.taskToEdit = task;
  }

  updateTask(task:any) {
    // this.taskService.updateTask(task);
    // this.taskToEdit = null;
    // this.editState = false;
  }

}