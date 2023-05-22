import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generateId } from 'src/app/shared/generatedId';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  id:any;
  title:any="ADD STORE";
  stores:any=[];
  findedStore:any={};
  storeForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.stores=JSON.parse(localStorage.getItem("stores")||"[]");
    this.id=this.activatedRoute.snapshot.paramMap.get("id"); // id le meme dans app-routing.module.ts
    
    if(this.id){
      this.title="EDIT STORE";
      this.findedStore=this.stores.find((obj)=>{return obj.id==this.id});
      
    }
    this.storeForm=this.formBuilder.group({
      name:[""],
      address:[""],

    }
    )
  }
  validate(){
    if (this.id){
      //Editing
      for (let i = 0; i < this.stores.length; i++) {
        if(this.stores[i].id == this.id){
          this.stores[i]=this.findedStore;
          break;
        }
      }
   

    }else{
      //Adding
      this.storeForm.value.id=generateId(this.stores);
      this.stores.push(this.storeForm.value);
  
    }
    
    localStorage.setItem("stores",JSON.stringify(this.stores));
    this.router.navigate(["admin"]);
  }

}
