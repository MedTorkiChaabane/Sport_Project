import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any;
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matchesArray;
      }
    );

  }

  displayMatch(id: any) {
    localStorage.setItem("matchId", id);
    this.router.navigate(["matchInfo"]);
  }
  goToEdit(id: any) {
    // alert("Edit"+id);
    this.router.navigate([`editMatch/${id}`]);
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      (data) => {
        this.matchService.getAllMatches().subscribe(
          (data) => {this.matches=data.matchesArray;
          }
        )
      }
    );
  }

}
