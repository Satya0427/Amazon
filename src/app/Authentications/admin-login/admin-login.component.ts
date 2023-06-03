import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  mailid:any;
  password:any;
  constructor(private router:Router, private fb:FormBuilder){}
  // AdminForm=this.fb.group({
  //   Mailid:this.fb.control(null,Validators.required),
  //   password:this.fb.control(null,Validators.required)
  // })
  AdminLogin(){
    if(this.mailid =="satyamanikanta274@gmail.com"&& this.password=="14404M060@s"){
      alert("Admin login Successfully")
      this.router.navigateByUrl("/UsersInfo") 
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
