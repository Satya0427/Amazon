import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Authentications/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MobilesComponent } from './Mobiles/mobiles/mobiles.component';
import { CartComponent } from './Mobiles/cart/cart.component';
import { AdminLoginComponent } from './Authentications/admin-login/admin-login.component';
import { UsersDetailsComponent } from './Authentications/users-details/users-details.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MobilesComponent,
    CartComponent,
    AdminLoginComponent,
    UsersDetailsComponent,
    HeaderComponent,  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
