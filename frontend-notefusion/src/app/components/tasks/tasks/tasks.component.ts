import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

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
    this.taskService.getTasks().subscribe(tasks => {
    this.tasks = tasks.tareas;
    });
  }

  deleteTask(event:any, task:any) {
  //  const response = confirm('are you sure you want to delete?');
  //   if (response) {
  //     console.log(response);
  //     console.log(task.id);
  //   this.taskService.deleteTask(task.id);
  //   }
  //   return;
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