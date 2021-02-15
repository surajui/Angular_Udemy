import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/Services/product/products.service";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  productResponse: any = [];
  constructor(private _productService: ProductsService) {}

  ngOnInit() {
    this.allProduct();
  }
  allProduct() {
    this._productService.getAllProduct().subscribe(
      (product) => {
        this.productResponse = product;
        console.log(this.productResponse);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
