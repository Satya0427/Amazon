import { Component,OnInit } from '@angular/core';
import { MobileServiceService } from 'src/app/Mobileservice/mobile-service.service';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{
  constructor(private service:MobileServiceService, private authservice:AuthserviceService){}
  mobileslist:any;
  access:boolean=false;
  

  ngOnInit(): void {
    this.service.GetProductsList().subscribe((data)=>{
      this.mobileslist = data;
    })
    this.access=this.authservice.condition
  }

  AddProduct(product:any){
    if(this.access){
      this.service.AddToCart(product);
    alert("Product added to Cart Successfull")
    }
    else{
      alert("you dont have access Login First");
    }
    
  }
  
}
