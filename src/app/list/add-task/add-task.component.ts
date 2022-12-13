import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTaskForm: FormGroup;
  priorities: string[] = ['Low', 'Medium', 'High', 'Urgent'];

  constructor(private formBuilder: FormBuilder) {
    this.addTaskForm = this.formBuilder.group({
      name: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null),
      materials: new FormControl<string | null>(null),
      priority: new FormControl<string | null>(null)
    })}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addTaskForm.value);
  }
}
