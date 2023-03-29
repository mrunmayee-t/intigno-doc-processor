import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddProcessComponent } from '../add-process/add-process.component';

export interface ProcessElement {
  no: number;
  processName: string;
  description: string;
  primaryEmail: string;
  dueDate: string
}

const ELEMENT_DATA: ProcessElement[] = [
  { no: 1, processName: 'Saurabh Visal', description: 'Some description', primaryEmail: 'saurabh.visal@abc.com', dueDate: '18/03/2023' },
  { no: 2, processName: 'Neeraj Visal', description: 'Tax document submission', primaryEmail: 'neerajvisal@abc.com', dueDate: '18/03/2023' },
  { no: 3, processName: 'Soham Bhute', description: 'Company registration', primaryEmail: 'soham_bhute@abc.com', dueDate: '18/03/2023' },
  { no: 4, processName: 'David Smith', description: 'Create LLP', primaryEmail: 'd.smith@abc.com', dueDate: '18/03/2023' },
  { no: 5, processName: 'Johnny Depp', description: 'TAX filing', primaryEmail: 'jd@abc.com', dueDate: '18/03/2023' }

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  displayedColumns: string[] = ['no', 'processName', 'description', 'primaryEmail', 'dueDate'];
  processData = ELEMENT_DATA;
  dataFromDialog: any;
  no = this.processData[this.processData.length - 1].no;
  @ViewChild(MatTable, { static: true }) processTable!: MatTable<any>;
  constructor(private dialog: MatDialog, private router: Router) {

  }

  addProcess() {
    const dialogRef = this.dialog.open(AddProcessComponent, {
      width: '450px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form;
      this.no = this.no + 1;
      this.processData.push({
        no: this.no,
        processName: this.dataFromDialog.controls.processName.value,
        description: this.dataFromDialog.controls.description.value,
        primaryEmail: this.dataFromDialog.controls.primaryEmail.value,
        dueDate: this.dataFromDialog.controls.dueDate.value
      });
      this.processTable.renderRows();
      this.router.navigate(['requests/']);
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }

  rowClicked(row: any) {
    console.log(row)
    this.router.navigate(['requests/'], row);
  }
}
