import { NgFor } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.scss']
})
export class AddProcessComponent implements OnInit{
  addProcessForm: FormGroup;
  userData: any = [];
  displayedColumns: string[] = [ 'name',  'email','delete'];
  recipientsObj: any = [];
  recipientCount: any = 1;
  @ViewChild(MatTable, { static: true }) recipientTable!: MatTable<any>;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddProcessComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.addProcessForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.data.userData.forEach((element: { recipient: any; requester: any; }) => {
      this.userData.push({
        recipient: element.recipient,
        requester: element.requester
      })
      
    })
    
  }
  createProcess(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: this.recipientsObj
    })
  }

  addRecipient(form: FormGroup){
    // this.userData.push({
    //   recipient: this.addProcessForm.get('firstName')?.value + ' ' + this.addProcessForm.get('lastName')?.value,
    //   requester: this.addProcessForm.get('email')?.value
    //   })
      this.recipientsObj.push({
          no: this.recipientCount++,
          recipientName: this.addProcessForm.get('firstName')?.value + ' ' + this.addProcessForm.get('lastName')?.value, 
          recipientEmail: this.addProcessForm.get('email')?.value 
      })
     // this.recipientTable.renderRows();
  }

  rowClicked(row: any){
    this.recipientsObj.push({
      no: this.recipientCount++,
      recipientName: row.recipient,
      recipientEmail: row.requester 
    })
  }

  deleteRecipient(i: any){
    this.recipientCount = this.recipientsObj.length
    this.recipientsObj[i+1].no = this.recipientCount-1
    this.recipientsObj.splice(i,1);
  }
}
