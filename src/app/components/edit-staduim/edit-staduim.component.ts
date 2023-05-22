import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-edit-staduim',
  templateUrl: './edit-staduim.component.html',
  styleUrls: ['./edit-staduim.component.css']
})
export class EditStaduimComponent implements OnInit {
  staduim:any={};
  id:any;
  editStaduimForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router, private staduimService:StaduimService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.editStaduimForm=this.formBuilder.group({
      name:[""],
      capacity:[""],
      city:[""],
    });
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.staduimService.getStaduimById(this.id).subscribe(
      (data) => {
        this.staduim = data.staduim;
      }
    );
  }
  editStaduim(){
    this.staduimService.editStaduim(this.staduim).subscribe();
    this.router.navigate(["admin"]);
  }

}
