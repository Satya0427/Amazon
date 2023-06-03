import { Component, OnInit } from '@angular/core';
import { MobileServiceService } from 'src/app/Mobileservice/mobile-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products:any=[];
 

  constructor(private MService:MobileServiceService){}

  ngOnInit(): void {
    this.MService.PorductsSubject.subscribe((data)=>{
      this.products = data;
    })
  }

  DeleteItem(id:any){
    this.products.splice(id,1);
  }
}
