import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private environment = 'http://127.0.0.1:8000/tareas/works/';
  
  constructor (private http: HttpClient, private snackBar: MatSnackBar) {}

  getTasks() {
    return this.http
      .get<any>(
        `${this.environment+'get'}`
      )
      .pipe(
        catchError((error) => {
          if (error) {
            this.snackBar.open("Registros no encontrados", "Cerrar");
          }
          return [];
        })
      );
  }

  addTask(task: Task) {
    console.log("ESTÁ ENTRANDO AL SERVICIO");
    console.log(task);

    return this.http
    .post(`${this.environment+'post'}`, task
    )
    .pipe(
      catchError((error) => {
        if (error) {
          this.snackBar.open("Error al crear la tarea", "Cerrar");
        }
        return [];
      })
    );
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.environment+'delete/'}+${id}`).pipe(
      catchError((error) => {
        if (error) {
          this.snackBar.open("Error al eliminar la tarea", "Cerrar");
        }
        return [];
      })
    );
  }

  updateTask(task: Task) {
    return this.http
    .put(
      `${this.environment+'put/'}${task.id}`, task
    )
    .pipe(
      catchError((error) => {
        if (error) {
          this.snackBar.open("Error al editar la tarea", "Cerrar");
        }
        return [];
      })
    );
  }
}