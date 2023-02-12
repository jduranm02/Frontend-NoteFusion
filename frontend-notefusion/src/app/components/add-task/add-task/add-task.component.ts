import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTaskComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private taskService: TaskService, private formBuilder: UntypedFormBuilder,
    private snackbar: MatSnackBar) {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fechaDesde: ['', [Validators.required]],
      fechaHasta: ['', [Validators.required]],
    });
    let daticos = {
      id: null,
      "title": "siksss",
      "description": "brayayin",
      "fechaDesde": new Date(),
      "fechaHasta": new Date(),
  }
  this.taskService.addTask(daticos);
  }


  ngOnInit(): void  {
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.controls['fechaDesde'].value)
    const task = this.form.value as Task;
    console.log("ANTES DEL SERVICIO");
    console.log(task);
    this.taskService.addTask(task);
    // if (this.form.valid) {
    // console.log(this.form.value);
    // this.taskService
    // .addTask(this.form.value)
    // this.snackbar.open("Tarea creada", "Cerrar");
    // this.form.reset();
    // }
  }

}