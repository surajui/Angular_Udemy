import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { SpinnerService } from "src/app/Services/spinner/spinner.service";
import "rxjs/add/operator/do";
import { Observable } from "rxjs";

@Injectable()
export class Spinner implements HttpInterceptor {
  constructor(public spinnerService: SpinnerService) {
    console.log(SpinnerService);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.isShow();
    return next.handle(req);
  }
}
