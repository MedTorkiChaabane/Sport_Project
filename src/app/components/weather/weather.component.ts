import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

   result:any; 
   search:any={};
   searchForm:FormGroup;


  constructor(private router:Router,
    private weatherService: WeatherService) { }

  ngOnInit() {
   
  }
  searchWeather(){
  this.weatherService.getWeather(this.search).subscribe(
    (data) => {
      this.result = data.result;
    }
  );
  }

}
