import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Backend server address
  userURL: string = "http://localhost:3000/users";
  //httpClient : un livreur
  constructor(private httpClient: HttpClient) { }
  //user : {firstName, lastName, email...}
  signup(user: any, file: File) {
    let formData = new FormData;
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    if(user.tel){
      formData.append("tel", user.tel);
    }
    formData.append("img", file);
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup", formData);
  }
  //user : {email, pwd}
  login(user: any) {
    return this.httpClient.post<{ message: string, user: any }>(this.userURL + "/login", user);
  }

  //response array of objects
  getAllUsers() {
    return this.httpClient.get<{ usersArray: any }>(this.userURL);
  }

  //response one object
  getUserById(id: any) {
    return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
  }

  //Response Message/boolean
  deleteUser(id: any) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.userURL}/${id}`);
  }



  //Response Message/boolean
  editUser(newUser: any) {
    return this.httpClient.put(this.userURL, newUser);
  }
}
