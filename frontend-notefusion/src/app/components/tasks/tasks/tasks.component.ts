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
    console.log(task.id);
    console.log("ENTRA AL IF DE ELIMINAR");
    this.taskService.deleteTask(5);
    return;
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