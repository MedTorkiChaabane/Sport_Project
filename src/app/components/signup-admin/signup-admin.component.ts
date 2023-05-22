import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generatedId';
@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  usersTab: any;
  msg: any = "";
  //signupForm id formulaire
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cpwd: [""],
     
    })
  }
  signup() {
    this.signupForm.value.role = "admin";
    this.userService.signup(this.signupForm.value, null).subscribe(
      (data) => {
        console.log("Here into BL", data.message);
        this.msg=data.message;
      }
    );
  }
  

}
