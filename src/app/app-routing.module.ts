import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Authentications/register/register.component';
import { MobilesComponent } from './Mobiles/mobiles/mobiles.component';
import { CartComponent } from './Mobiles/cart/cart.component';
import { AdminLoginComponent } from './Authentications/admin-login/admin-login.component';
import { UsersDetailsComponent } from './Authentications/users-details/users-details.component';

const routes: Routes = [
  {path:'login&Regestration', component:RegisterComponent},
  {path:'mobilesList', component:MobilesComponent},
  {path:'cart', component:CartComponent},
  {path:'AdminLogin', component:AdminLoginComponent},
  {path:'UsersInfo', component:UsersDetailsComponent},
  {path:'',redirectTo:'mobilesList', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
