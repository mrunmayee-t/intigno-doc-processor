import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit{
  addItemsForm!: FormGroup;
  items = {no : 1, itemName: undefined}
  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
      this.addItemsForm = this.fb.group({
        itemName: ['', Validators.required],
        description: [''],
        required: new FormControl(false,[])
      })
  }

}
