import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { StoreComponent } from "./component/store/store.component";
import { FilterComponent } from "./component/filter/filter.component";
import { ProductCartComponent } from "./component/product-cart/product-cart.component";
import { UserOrderComponent } from "./component/user-order/user-order.component";
import { CartComponent } from "./component/cart/cart.component";
import { LoginComponent } from "./component/login/login.component";
import { SingupComponent } from "./component/singup/singup.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
    FilterComponent,
    ProductCartComponent,
    UserOrderComponent,
    CartComponent,
    LoginComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
