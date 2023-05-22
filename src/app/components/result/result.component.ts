import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { MatchService } from 'src/app/services/match.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() resultInput: any;
  @Output() matchEmitter: EventEmitter<any> = new EventEmitter();
  comment: any = {};
  userId: any;
  commentForm: FormGroup;
  allUsers: any=[];
  user: any;
  constructor(private commentService: CommentService, private matchService: MatchService, private userService: UserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.userService.getAllUsers().subscribe((data) => {
      this.allUsers = data.usersArray;
    });


  }

  scoreColor(s1: number, s2: number) {
    if (s1 > s2) {
      return "green";
    } else if (s1 < s2) {
      return "orange";
    } else {
      return "blue";
    }
  }
  //la même fonction sans paramètres
  // scoreColor() {
  //   if (resultInput.scoreOne > resultInput.scoreTwo){
  //     return "green";
  //   }else if(resultInput.scoreOne < resultInput.scoreTwo){
  //     return "red";
  //   }else {
  //     return "blue";
  //   }

  // }
  searchUser(id: any) {
    return this.allUsers.find((obj)=>{ return obj._id==id});
  }
  addCommentMatch() {
    this.comment.userId = this.userId;
    this.comment.matchId = this.resultInput._id;
    this.commentService.addComment(this.comment).subscribe( (data) =>{
      
        this.matchService.getAllMatchesWithComments().subscribe((data)=>{
          this.matchEmitter.emit(data.matches);
        })
      
    });
    console.log("ok");
  }

}
