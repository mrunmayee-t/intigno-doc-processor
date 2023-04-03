import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProcessComponent } from '../add-process/add-process.component';

export interface ProcessElement {
  requestName: string;
  recipient: string;
  requester: string;
  dueDate: string;
}

const ELEMENT_DATA: ProcessElement[] = [
  {  requestName:  'Some description', recipient: 'Saurabh Visal', requester: 'saurabh.visal@abc.com', dueDate: '18/03/2023' },
  { requestName: 'Tax document submission', recipient: 'Neeraj Visal', requester: 'neerajvisal@abc.com', dueDate: '18/03/2023' },
  { requestName: 'Company registration', recipient:  'Soham Bhute', requester: 'soham_bhute@abc.com', dueDate: '18/03/2023' },
  { requestName: 'Create LLP', recipient: 'David Smith', requester: 'd.smith@abc.com', dueDate: '18/03/2023' },
  { requestName: 'TAX filing', recipient: 'Johnny Depp', requester: 'jd@abc.com', dueDate: '18/03/2023' }

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  displayedColumns: string[] = [ 'requestName', 'recipient', 'requester', 'dueDate', 'delete'];
  processData = ELEMENT_DATA;
  dataFromDialog: any;
  @ViewChild(MatTable, { static: true }) processTable!: MatTable<any>;
  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.route.queryParams.subscribe(
    //   params => {
    //     this.processData.push(JSON.parse(params['userData']))
    //   });
    //   this.processTable.renderRows();
  }
  addProcess() {
    const options = {queryParams: {userData: JSON.stringify(this.processData)}};
    this.router.navigate(['create-requests/'],options);
    // const dialogRef = this.dialog.open(AddProcessComponent, {
    //   width: '450px',
    //   height: '500px'
    // });

    // dialogRef.afterClosed().subscribe((data) => {
    //   this.dataFromDialog = data.form;
    //   this.processData.push({
    //     requestName: this.dataFromDialog.controls.processName.value,
    //     recipient: this.dataFromDialog.controls.description.value,
    //     requester: this.dataFromDialog.controls.primaryEmail.value,
    //     dueDate: this.dataFromDialog.controls.dueDate.value
    //   });
    //   this.processTable.renderRows();
    //   this.router.navigate(['requests/']);
    //   if (data.clicked === 'submit') {
    //     console.log('Sumbit button clicked');
    //   }
    // });
  }

  rowClicked(row: any) {
    console.log(row)
    this.router.navigate(['requests/'], row);
  }

  deleteRow(elment: any){

  }

  setRecipientData(event: any){
    this.processData.push(event)
    this.processTable.renderRows();
  }
}
