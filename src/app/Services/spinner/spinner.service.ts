import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private spinner = new BehaviorSubject<boolean>(false);
  constructor() {}
  isShow() {
    this.spinner.next(true);
  }
  isHide() {
    this.spinner.next(false);
  }
  isVisable() {
    return this.spinner.asObservable();
  }
}
