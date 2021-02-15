import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserOrderComponent } from './component/user-order/user-order.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'order',component:UserOrderComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
