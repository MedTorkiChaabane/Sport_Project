import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-staduims-table',
  templateUrl: './staduims-table.component.html',
  styleUrls: ['./staduims-table.component.css']
})
export class StaduimsTableComponent implements OnInit {
  staduims:any=[];
  constructor(private router:Router, private staduimService: StaduimService) { }

  ngOnInit() {
    this.staduimService.getAllStaduims().subscribe(
      (data) => {
        this.staduims=data.staduimsArray;
      }
    );
  }
  editStaduim(id:any){
    this.router.navigate([`editStaduim/${id}`])
  }
  deleteStaduim(id:any){
  this.staduimService.deleteStaduim(id).subscribe(
    ()=>{
      this.staduimService.getAllStaduims().subscribe(
        (data)=>{
          this.staduims=data.staduimsArray;
        }
      );
    }
  );
  }
}
