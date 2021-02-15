import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/Services/product/products.service";

@Component({
  selector: "app-product-cart",
  templateUrl: "./product-cart.component.html",
  styleUrls: ["./product-cart.component.css"],
})
export class ProductCartComponent implements OnInit {
  constructor(private _productService: ProductsService) {}

  ngOnInit() {}
}
