import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path:string="assets/images/logo.png";
  home:string="Home";
  matches:string="Matches";
  players:string="Players";
  userId:string;
  userRole:string;
  constructor() { }

  ngOnInit() {
    this.userId=localStorage.getItem("userId");
    this.userRole=localStorage.getItem("userRole");
  }
  
  logout(){
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
  }

}
