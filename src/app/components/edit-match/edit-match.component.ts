import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; //ActivatedRouter pour récuperer le param de path
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchesTab: any;
  id: any;
  match: any={};
  matchForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private matchService:MatchService) { }

  ngOnInit() {
    // this.id=localStorage.getItem('matchId')
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        this.match = data.match;
      }
    );

  }
  editMatch(){
    this.matchService.editMatch(this.match).subscribe();
    this.router.navigate(["admin"]);
  }

}
