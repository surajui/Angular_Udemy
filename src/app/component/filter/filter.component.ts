import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/Model/categeries";
import { CategoryService } from "src/app/Services/category/category.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  categories1: Category[];
  constructor(private serive: CategoryService) {}

  ngOnInit() {
    this.collectAllCategory();
  }

  collectAllCategory() {
    this.serive.getAllProduct().subscribe(
      (categories) => {
        this.categories1 = categories;
        console.log(this.categories1);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  categoryChange(event) {
    console.log(event.target.value);
  }
}
