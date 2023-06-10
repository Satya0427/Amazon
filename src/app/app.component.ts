import { Component,OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';
import { MobileServiceService } from './Mobileservice/mobile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loginUser:any;
  length:any;
  constructor(private service:AuthserviceService, private router:Router, private MService:MobileServiceService){}
  ngOnInit(): void {
    this.service.LoginUser.subscribe((response)=>{
      this.loginUser = response;
    })
    this.MService.produtsize().subscribe((size:any)=>{
      this.length=size.length
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
