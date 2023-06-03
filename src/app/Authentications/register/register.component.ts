import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  UserFrmDB:any;
  constructor(private service:AuthserviceService, private fb:FormBuilder, private router:Router){}

  RegistrationForm = this.fb.group({
    Name:this.fb.control(null,[Validators.required]),
    id:this.fb.control(null,[Validators.required,Validators.email]),
    Password:this.fb.control(null,[Validators.required])
  })

  LoginForm = this.fb.group({
    id:this.fb.control(null,[Validators.required]),
    Password:this.fb.control(null,[Validators.required])
  })

  
  Register()
  {
    if(this.RegistrationForm.valid)
    {
      console.log(this.RegistrationForm.value)
      this.service.PostUsers(this.RegistrationForm.value).subscribe(()=>{
        alert("Your registration is successful");
        this.RegistrationForm.reset();
      })
    }
  }

  login()
  {
    if (this.LoginForm.valid) {
      this.service.LoginAuth(this.LoginForm.value.id).subscribe((item:any) => {
        this.UserFrmDB = item;
         if(this.UserFrmDB.Password == this.LoginForm.value.Password) {
            alert('successfully loggedin');
            this.LoginForm.reset();
            this.service.LoginUser.next(this.UserFrmDB.Name);
            this.router.navigateByUrl('/mobilesList')
            this.service.condition=true;
          } 
         else {
          alert('Invalid credentials');
        }
      })
    } else {
      alert('please enter valid data');
    } 
  
  }
}
