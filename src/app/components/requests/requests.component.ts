import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRequestsComponent } from './add-requests/add-requests.component';

export interface ProcessElement {
  status: string;
  requestName: string;
  createdOn: string;
  client: string;
  priority: string
}

const ELEMENT_DATA: ProcessElement[] = [
  { status: 'Open', requestName: 'PAN photocopy', createdOn: '11/03/2023', client: 'saurabh.visal@abc.com', priority: 'high' },
  { status: 'Open', requestName: 'PAN photocopy', createdOn: '11/03/2023', client: 'saurabh.visal@abc.com', priority: 'high' },
  { status: 'Open', requestName: 'PAN photocopy', createdOn: '11/03/2023', client: 'saurabh.visal@abc.com', priority: 'high' },
  { status: 'Open', requestName: 'PAN photocopy', createdOn: '11/03/2023', client: 'saurabh.visal@abc.com', priority: 'high' },
  { status: 'Open', requestName: 'PAN photocopy', createdOn: '11/03/2023', client: 'saurabh.visal@abc.com', priority: 'high' },

];

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {
  displayedColumns: string[] = ['status', 'requestName', 'createdOn', 'client', 'priority'];
  requestData = ELEMENT_DATA;

  constructor(private dialog: MatDialog) {

  }
  addRequest() {
    const dialogRef = this.dialog.open(AddRequestsComponent, {
      width: '450px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe((data) => {
      // this.dataFromDialog = data.form;
      // this.no = this.no + 1;
      // this.processData.push({
      //   no: this.no,
      //   processName: this.dataFromDialog.controls.processName.value,
      //   description: this.dataFromDialog.controls.description.value,
      //   primaryEmail: this.dataFromDialog.controls.primaryEmail.value,
      //   dueDate: this.dataFromDialog.controls.dueDate.value
      // });
      // this.processTable.renderRows();
      // this.router.navigate(['requests/']);
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }
  requestRowClicked(row: any) {

  }
}
