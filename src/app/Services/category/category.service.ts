import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Category } from "src/app/Model/categeries";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  baseUrl: string = "http://localhost/api/categories";

  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get(this.baseUrl).pipe(
      map((result) => {
        return <Category[]>result["categories"];
      })
    );
  }
}
