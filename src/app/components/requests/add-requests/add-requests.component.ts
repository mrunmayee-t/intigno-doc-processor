import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProcessComponent } from '../../add-process/add-process.component';

@Component({
  selector: 'app-add-requests',
  templateUrl: './add-requests.component.html',
  styleUrls: ['./add-requests.component.scss']
})
export class AddRequestsComponent implements OnInit {

  addRequestForm!: FormGroup;
  addItemsForm!: FormGroup;
  selected = 0;
  no: Number = 1
  checkListItems = [{no : this.no, itemName: undefined}]
  items = {no : this.no, itemName: undefined}
  requiredCheckbox: any = 0;
  userData: any = [];
  @Output() recipientDataEvent = new EventEmitter();
  
  constructor(private dialog: MatDialog,private fb: FormBuilder,private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.userData = JSON.parse(params['userData'])
      });
    this.addRequestForm = this.fb.group({ 
      title: ['', Validators.required],
    });

    this.addItemsForm = this.fb.group({
        items: this.fb.array([
           this.getItems()
        ])
    })
    // this.checkListItems.forEach(element => {
    //     element.no = Number(this.no)+1;
    //     element.itemName = elementItem.get('itemName')?.value
    //   });
  }

  private getItems(){
    return this.fb.group({
      itemName: ['', Validators.required],
      description: [''],
      required: new FormControl(false)
    });
  }

  addItem(){
    const control = <FormArray>this.addItemsForm.get("items") as FormArray;
    control.controls.forEach(elementItem => {
      this.checkListItems.forEach(element => {
        element.no = Number(this.no)+1;
        element.itemName = elementItem.get('itemName')?.value
      });
    });
    control.push(this.getItems());
  }

  get aliasesArrayControl() {
    console.log((this.addItemsForm.get('items') as FormArray).controls)
    return (this.addItemsForm.get('items') as FormArray).controls;
  }

  removeItem(i: number){
    if(i == 0){
      return
    }
    const control = <FormArray>this.addItemsForm.controls['items'];
    control.removeAt(i);
    //this.requiredCheckbox = this.requiredCheckbox-1
  }
  requireCheckboxChecked(i:number, event:any){
    if(event.checked){
      this.requiredCheckbox = this.requiredCheckbox+1
    }
    else{
      this.requiredCheckbox = this.requiredCheckbox-1
    }
  }

  addRecipients(){
    const dialogRef = this.dialog.open(AddProcessComponent, {
        width: '950px',
        // height: '600px',
        data:{
          userData: this.userData
        }
      });
      this.userData = []
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        //this.userData.forEach((userEle:any) => {
          result.form.forEach((element: any) => {
              this.userData.push({
                requestName: this.addRequestForm.get('title')?.value,
                recipient: element.recipientName,
                requester: element.recipientEmail
              })
          })
        //})
        this.recipientDataEvent.emit(this.userData)
        // const options = {queryParams: {userData: JSON.stringify(this.userData)}};
         this.router.navigate(['/']);
      });
  }
 
}
