import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
   results:any;
   search:any={};
   searchForm:FormGroup;

  constructor(private router:Router, private matchService:MatchService) { }

  ngOnInit() {
   
  }
  searchMatch(){
    this.results=[];
   
    this.matchService.searchMatch(this.search).subscribe(
      (data) => {
        this.results= data.searchMatches;
      }
    );
  }

}
