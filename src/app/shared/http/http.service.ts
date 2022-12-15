import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/app/list/task.service';
import { Task } from 'src/app/list/task.model';
import { AuthService, UserData } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class HTTPService {

  firebaseDatabaseURL = "https://to-do-manager-2ffb3-default-rtdb.firebaseio.com/tasks/";


  constructor(private http: HttpClient, private taskService: TaskService, private authService: AuthService) {}

  fetchCurrentTasks() {
    let userData = JSON.parse(localStorage.getItem('userData') as string);

    return this.http
    .get<Task[]>(`${this.firebaseDatabaseURL}${userData.id}/currentTasks.json`, {})
    .subscribe((tasks) => {
      console.log(tasks);
      if (tasks === null) {
        this.taskService.setCurrentTasks([]);
      } else {
        this.taskService.setCurrentTasks(tasks);
        console.log('Response from DB: ', tasks);
      }
    });
}

  fetchArchivedTasks() {
    let userData = JSON.parse(localStorage.getItem('userData') as string);

    return this.http
    .get<Task[]>(`${this.firebaseDatabaseURL}${userData.id}/archivedTasks.json`, {})
    .subscribe((tasks) => {
      console.log(tasks);
      if (tasks === null) {
        this.taskService.setArchivedTasks([]);
      } else {
        this.taskService.setArchivedTasks(tasks);
        console.log('Response from DB: ', tasks);
      }
    });
  }

    saveTasksToFirebase() {
      let userData = JSON.parse(localStorage.getItem('userData') as string);

      const tasks = {
        archivedTasks: this.taskService.getArchivedTasks(),
        currentTasks: this.taskService.getCurrentTasks(),
      };

      this.http.patch(`${this.firebaseDatabaseURL}${userData.id}`, tasks).subscribe((res) => {
        console.log('Firebase Patch Response:', res);
      });
    }
}
