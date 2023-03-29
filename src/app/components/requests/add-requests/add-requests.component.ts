import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-requests',
  templateUrl: './add-requests.component.html',
  styleUrls: ['./add-requests.component.scss']
})
export class AddRequestsComponent {

  addRequestForm: FormGroup;
  selected = 0;
  statuses: any = [
    { id: 1, statusName: 'Open' },
    { id: 2, statusName: 'In Progress' },
    { id: 3, statusName: 'Completed' },
    { id: 4, statusName: 'Rejected' },
    { id: 5, statusName: 'Approved' },
  ]
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRequestsComponent>) {
    this.addRequestForm = this.fb.group({})
  }

  createRequest(form: NgForm) {
  }
}
