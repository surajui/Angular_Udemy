import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from "src/app/Services/user/user.service";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"],
})
export class SingupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private route: Router
  ) {}
  private userSingup: FormGroup;
  private isSubmitted: boolean = false;
  private newUserRep: any;
  isSpinner: boolean = true;
  error: string;
  success: string;
  ngOnInit() {
    const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    const mobilePattern = "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$";
    const userNamePattern = "^[a-zA-Z0-9_-]{3,16}$";
    this.userSingup = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern(userNamePattern)]],
      email: ["", [Validators.required, Validators.pattern(emailPattern)]],
      phone: ["", [Validators.required, Validators.pattern(mobilePattern)]],
      password: ["", Validators.required],
    });
  }

  newUserForm() {
    this.isSubmitted = true;
    let userObj = {
      name: this.userSingup.value.name,
      email: this.userSingup.value.email,
      phone: this.userSingup.value.phone,
      password: this.userSingup.value.password,
    };
    if (this.userSingup.invalid) {
      return;
    }
    this.userService.createUser(userObj).subscribe({
      next: (response) => {
        this.newUserRep = response.message;
        console.log(this.newUserRep);
        this.success = this.newUserRep.message;
        this.showSpinner();
        this.userSingup.reset();
        this.route.navigate(["/login"]);
        console.log(response + "User created successfully");
      },
      error: (response: HttpErrorResponse) => {
        this.error = response.error.error.message;
        this.showSpinner();
      },
    });
  }
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
