import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(public taskService: TaskService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
    this.tasks = tasks.tareas;
    });
  }

  deleteTask(task:any) {
  console.log(task);
  const response = confirm('¿Estás seguro de que deseas eliminarlo?');
   if (response) {
   this.taskService.validateMethod("delete",task);
   location.reload();
  }
}

  editTask(event:any, task:any) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }

  updateTask(task:any) {
    this.taskService.validateMethod("update",task);
    this.taskToEdit = null;
    this.editState = false;
  }

  updateTasksList() {
    this.cdr.detectChanges();
  }
}