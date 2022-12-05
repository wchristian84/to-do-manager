import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-archived-tasks',
  templateUrl: './archived-tasks.component.html',
  styleUrls: ['./archived-tasks.component.css']
})
export class ArchivedTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
