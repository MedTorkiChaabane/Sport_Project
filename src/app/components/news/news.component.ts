import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsTab:any=[
    { title:"Title1", image:"assets/images/img_1.jpg" , avatar:"assets/images/person_1.jpg", userName:"Alice" , date:"01/05/2023"},
    { title:"Title2", image:"assets/images/img_2.jpg" , avatar:"assets/images/person_2.jpg", userName:"Sergio" , date:"01/06/2023"},
    { title:"Title3", image:"assets/images/img_3.jpg", avatar:"assets/images/person_3.jpg", userName:"Mohamed" , date:"01/07/2023"},
    

  ];
  

  constructor() { }

  ngOnInit() {
  }
  
  calcul(a:number,b:number,c:number){
    return a+b+c;
  }

}
