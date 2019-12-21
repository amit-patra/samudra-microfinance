import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NewCustomerComponent } from './component/new-customer/new-customer.component';
import { ViewCustomerComponent } from './component/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './component/update-customer/update-customer.component';
import { ViewDetailsComponent } from './component/view-details/view-details.component';
import { AccountStatementComponent } from './component/account-statement/account-statement.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-customer', component: NewCustomerComponent },
  { path: 'view-customer', component: ViewCustomerComponent },
  { path: 'update-customer', component: UpdateCustomerComponent },
  { path: 'view-details', component: ViewDetailsComponent },
  { path: 'statement', component: AccountStatementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
