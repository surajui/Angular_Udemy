import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/Services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  error: string;
  success: string;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private route: Router
  ) {}

  ngOnInit() {
    const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    this.userLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailPattern)]],
      password: ["", Validators.required],
    });
  }
  userLoginForm() {
    let loginObj = {
      email: this.userLogin.value.email,
      password: this.userLogin.value.password,
    };
    if (this.userLogin.invalid) {
      return;
    }
    this.service.loginUser(loginObj).subscribe(
      (resp) => {
        console.log(resp);
        this.success = resp.message;
        this.error = undefined;
        this.route.navigate(["/home"]);
      },
      (error: HttpErrorResponse) => {
        this.error = error.error.error.message;
        this.success = undefined;
      }
    );
  }
}
