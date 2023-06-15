import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  UsersUrl='https://rest-api-yhi2.onrender.com/user';
  condition:boolean=false;
  
  LoginUser = new BehaviorSubject("Login");

  constructor(private http:HttpClient) {}

  PostUsers(users:any){
    return this.http.post(this.UsersUrl,users);
  }

  LoginAuth(id:any){
    return this.http.get(this.UsersUrl+"/"+id)
  }
  UsersDetails(){
   return this.http.get(this.UsersUrl)
  }

  DeleteUser(userid:any){
    return this.http.delete(this.UsersUrl+"/"+userid);
  }


}
