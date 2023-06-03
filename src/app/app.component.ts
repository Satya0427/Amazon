import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loginUser:any;
  constructor(private service:AuthserviceService, private router:Router){}
  ngOnInit(): void {
    this.service.LoginUser.subscribe((response)=>{
      this.loginUser = response;
    })
  }
  OpenCart(){
    if(this.service.condition){
      this.router.navigateByUrl('/cart');
    }
    else{
      alert("You dont have access Login first");
    }
  }
}
