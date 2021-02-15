import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private _http: HttpClient, private userserice: UserService) {}
  private produceBaseUrl: string = "http://localhost/api/products";

  getAllProduct() {
    return this._http
      .get(this.produceBaseUrl, {
        headers: {
          authorization: this.userserice.getToken(),
        },
      })
      .pipe(
        map((product) => {
          return <{ count: number; products: any }>product["products"];
        })
      );
  }
}
