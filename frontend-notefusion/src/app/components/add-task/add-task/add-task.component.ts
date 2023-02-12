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
  arrayPeticion: any[] = ['','',''];

  constructor(private taskService: TaskService, private formBuilder: UntypedFormBuilder,
    private snackbar: MatSnackBar) {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      fechaDesde: ['', [Validators.required]],
      fechaHasta: ['', [Validators.required]],
    });
    this.taskService.peticion.subscribe(
      (data) => {
        console.log(data);
        this.arrayPeticion[0] = data;
        if(this.arrayPeticion[0] !== ''){
          console.log("ENTRÉ AL IF DEL OTRO COMPONENTE");
          this.makeAction(this.arrayPeticion);
        }
        ;
      },);
    this.taskService.idTask.subscribe(
      (data) => {
        console.log(data);
        this.arrayPeticion[1] = data;
      },);
    this.taskService.selectedTask.subscribe(
      (data) => {
        console.log(data);
        this.arrayPeticion[2] = data;
      },);
  
        
    
    
    //ESTO ES PARA QUEMAR EL DELETE
    //this.taskService.deleteTask(7).subscribe();
    // this.form.controls['id'].setValue(null);
    // this.form.controls['title'].setValue('Tarea 1');
    // this.form.controls['description'].setValue('Descripcion de la tarea 1');
    // this.form.controls['fechaDesde'].setValue(new Date().toISOString());
    // this.form.controls['fechaHasta'].setValue(new Date().toISOString());
    // let variable = this.form.value as Task;
    
    // const variable = {
    //   title: 'Tarea 1',
    //   description: 'Descripcion de la tarea 1',
    //   fechaDesde: new Date().toISOString(),
    //   fechaHasta: new Date().toISOString(),
    // }
    // console.log(variable);
    // let definitivo = variable as Task;
    // this.taskService.addTask(definitivo).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    // );
    }

  ngOnInit(): void  {
    this.taskService.idTask
  }

  onSubmit() {
    if (this.form.valid) {
    let variable = this.form.value;
    let definitivo = variable as Task;
    this.taskService
    .addTask(definitivo).subscribe(
      (data) => {
        if(data){
        this.snackbar.open("Tarea creada", "Cerrar");
        location.reload();
      }
      }

    )
    
    }
  }

  makeAction(array: any[]) {
    console.log(array);
    if (array[0] === 'delete') {
      this.taskService.deleteTask(array[1]).subscribe();
    }
    if (array[0] === 'update') {
      this.taskService.updateTask(array[2]).subscribe();
    }
  }
    
  }
  