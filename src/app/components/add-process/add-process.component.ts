import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.scss']
})
export class AddProcessComponent {
  addProcessForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddProcessComponent>) {
    this.addProcessForm = this.fb.group({
      processName: ['', Validators.required],
      description: ['', Validators.required],
      primaryEmail: ['', Validators.required],
      dueDate: ['', Validators.required]
    })
  }

  createProcess(form: NgForm) {
    if (this.addProcessForm.valid) {
      this.addProcessForm.controls['dueDate'].setValue(this.convertDate(this.addProcessForm.controls['dueDate'].value));
      this.dialogRef.close({
        clicked: 'submit',
        form: this.addProcessForm
      })
    }
    else {

    }
  }

  convertDate(dueDate: any) {
    let yyyy = dueDate.getFullYear();
    let mm = dueDate.getMonth() + 1;
    let dd = dueDate.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    dueDate = dd + '/' + mm + '/' + yyyy
    return dueDate;
  }
}
