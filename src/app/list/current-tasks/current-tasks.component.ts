import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-current-tasks',
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.css']
})
export class CurrentTasksComponent implements OnInit {
  tasks: Task[] = [
    {"name": "blasdhf",
    "description": "blah blah blah",
    "materialsNeeded": ["don't know"],
    "priority": "high"
    },
  ];

  constructor() { } // Inject taskService once it exists

  ngOnInit(): void {
  }

}
