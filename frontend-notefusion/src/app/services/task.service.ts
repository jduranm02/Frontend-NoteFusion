import { Injectable } from '@angular/core';

import { Task } from '../models/task';

import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  // tasksCollection: AngularFirestoreCollection<Task>;
  // tasks: Observable<Task[]>;
  // taskDoc: AngularFirestoreDocument<Task>;

  constructor() {
    // this.tasksCollection = this.afs.collection('tasks');
    // // this.tasks = this.afs.collection('tasks').valueChanges();
    // this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Task;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  getTasks() {
    return "hola"; 
  }

  addTask(task: Task) {
    console.log("hola");
  }

  deleteTask(task: Task) {
    console.log("hola");
  }

  updateTask(task: Task) {
    console.log("hola");
  }
}