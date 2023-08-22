import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id?: number; title: string; status: string },
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      id: data.id || null,
      title: data.title || '',
      status: data.status || 'Incomplete',
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
