import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  usersTab: any;
  users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getAllUsers().subscribe( (data) => {
      this.usersTab= data.usersArray;
    });
    
   
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe( (data)=>{
        if(data.isDeleted == true){
          this.userService.getAllUsers().subscribe ( (data) =>{
            this.usersTab= data.usersArray;
            this.users = this.usersTab.filter((obj:any) => { return obj.role == "user" });
          });
        };
    });
 
  }
  displayUser(id:any){
    
  }
  
}
