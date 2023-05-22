import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { generateId } from 'src/app/shared/generatedId';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  imagePreview:any;
  errorMsg: any = "";
  //signupForm id formulaire
  signupForm: FormGroup;
  constructor(private userService:UserService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      cpwd: [""],
      tel: ["", [Validators.minLength(8), Validators.maxLength(8)]],
      img:[""],
    })
  }

  signup() {
    this.signupForm.value.role = "user";
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data) => {
        console.log("Here into BL", data.message);
        this.errorMsg=data.message;
        if(data.message){
          this.router.navigate(["login"]);
        } else {
          this.errorMsg ="Email exists";
        }
      }
    );
  }
// add-X.ts
onImageSelected(event: Event) {
 const file = (event.target as HTMLInputElement).files[0];
 this.signupForm.patchValue({ img: file });
 this.signupForm.updateValueAndValidity();
 const reader = new FileReader();
 reader.onload = () => {
 this.imagePreview = reader.result as string
 };
 reader.readAsDataURL(file);
 }


  
}
