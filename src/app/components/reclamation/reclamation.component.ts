import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamationsTab:any=[];
  reclamation:any={};
  reclamationForm: FormGroup;
  id:any;
  constructor(private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.id=localStorage.getItem("userId");
    this.reclamationService.getAllUserReclamations(this.id).subscribe(
      (data)=>{
        this.reclamationsTab= data.reclamationsArray;
        console.log("Here Tab",this.reclamationsTab);
      }
    );
  }
  addReclamation(){
   this.reclamation.userId=this.id;
   this.reclamationService.addReclamation(this.reclamation).subscribe(
    (data)=>{ 
      console.log("Added with success", data.message);
      this.reclamationService.getAllUserReclamations(this.id).subscribe(
        (data)=>{
          this.reclamationsTab= data.reclamationsArray;
        }
      );
    }
   );
  }
  delete(id:any){
    this.reclamationService.deleteReclamation(id).subscribe(
      (data)=>{
        console.log(data.isDeleted);
        this.reclamationService.getAllUserReclamations(this.id).subscribe(
          (data)=>{
            this.reclamationsTab =  data.reclamationsArray;
          }
        );
      }
    );
  }
}
