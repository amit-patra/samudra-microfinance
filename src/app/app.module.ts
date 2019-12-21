import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewCustomerComponent } from './component/new-customer/new-customer.component';
import { ViewCustomerComponent } from './component/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewDetailsComponent } from './component/view-details/view-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountStatementComponent } from './component/account-statement/account-statement.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewCustomerComponent,
    ViewCustomerComponent,
    UpdateCustomerComponent,
    HeaderComponent,
    FooterComponent,
    LogOutComponent,
    ViewDetailsComponent,
    AccountStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
