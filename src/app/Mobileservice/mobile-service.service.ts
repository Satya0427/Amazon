import { HttpClient } from '@angular/common/http';
import { Injectable,OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {
  condition:boolean=false;

  MobilesUrl='https://rest-api-yhi2.onrender.com/products';
  PorductsSubject = new BehaviorSubject([]);
  public ProductsList:any=[];

  constructor(private http:HttpClient) { }

  GetProductsList(){
   return this.http.get(this.MobilesUrl);
  }

  AddToCart(product:any){
    this.ProductsList.push(product);
    this.PorductsSubject.next(this.ProductsList);
  }
  produtsize(){
    return this.PorductsSubject;
  }

}
