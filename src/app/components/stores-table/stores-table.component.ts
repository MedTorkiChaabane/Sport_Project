import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores-table',
  templateUrl: './stores-table.component.html',
  styleUrls: ['./stores-table.component.css']
})
export class StoresTableComponent implements OnInit {
  stores:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.stores=JSON.parse(localStorage.getItem("stores") || "[]");
  }
  goToEdit(id:any){
    this.router.navigate([`editStore/${id}`]);

  }

}
