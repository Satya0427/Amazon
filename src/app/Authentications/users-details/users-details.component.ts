import { ImplicitReceiver } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit{
  users:any;
  constructor(private service:AuthserviceService){}

  ngOnInit(): void {
    this.service.UsersDetails().subscribe((data)=>{
      this.users = data;
    })
  }

  DeleteAccount(id:any){
    this.service.DeleteUser(id).subscribe((response)=>{
      alert("Account Deleted Successfully");
      this.service.UsersDetails().subscribe((data)=>{
        this.users = data;
      })
    })
  }
}
