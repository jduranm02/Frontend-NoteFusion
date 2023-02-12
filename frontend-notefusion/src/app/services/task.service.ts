import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, TaksUpdate } from '../models/task';
import { catchError, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private environment = 'http://127.0.0.1:8000/tareas/works/';
  public idTask = new Subject<number>();
  public peticion = new Subject<string>();
  public selectedTask = new Subject<any>();
  
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
    return this.http
    .post<Task>(`${this.environment+'post'}`, task
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
    return this.http.delete(`${this.environment+'delete/'}${id}`).pipe(
      catchError((error) => {
        if (error) {
          this.snackBar.open("Error al eliminar la tarea", "Cerrar");
        }
        return [];
      })
    );
  }

  updateTask(task: TaksUpdate) {
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

  public validateMethod(string: string, task: any) {
    console.log("ENTRÉ AL SERVICIO");
      this.enviarTask(task);
      this.enviarId(task.id);
      if(string == 'delete'){
        this.enviarPeticion('delete');
      }else
      if(string == 'update'){
        this.enviarPeticion('update');
      }
    }

    enviarPeticion(peticion: string) {
      this.peticion.next(peticion);
    }
  
    obtenerPeticion() {
      return this.peticion.asObservable();
    }

    enviarId(id: number) {
      this.idTask.next(id);
    }

    obtenerId() {
      return this.idTask.asObservable();
    }

    enviarTask(task: any) {
      this.selectedTask.next(task);
    }

    obtenerTask() {
      this.selectedTask.asObservable();
    }
}