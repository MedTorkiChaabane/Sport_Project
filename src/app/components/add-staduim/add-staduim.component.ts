import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css']
})
export class AddStaduimComponent implements OnInit {
  staduim:any={};
  staduimForm:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder, private staduimService:StaduimService) { }

  ngOnInit() {
    this.staduimForm=this.formBuilder.group({
      name:[""],
      capacity:[""],
      city:[""],

    }
    )
  }
  addStaduim(){
  this.staduim=this.staduimForm.value;
  this.staduimService.addStaduim(this.staduim).subscribe();
  this.router.navigate(["admin"]);
}
}
