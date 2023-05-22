import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  editStoreForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.editStoreForm=this.formBuilder.group({
      name:[""],
      address:[""],
    });
  }

}
