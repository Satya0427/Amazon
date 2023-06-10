import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { MobileServiceService } from 'src/app/Mobileservice/mobile-service.service';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products:any=[];
  size:any;
 
  constructor(private MService:MobileServiceService, private AService:AuthserviceService){}

  ngOnInit(): void {
    this.MService.PorductsSubject.subscribe((data)=>{
      this.products = data;
    })
      
    }
  DeleteItem(id:any){
    this.products.splice(id,1);
  }
}
