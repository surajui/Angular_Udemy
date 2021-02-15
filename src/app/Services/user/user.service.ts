import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl: string = "http://localhost/api/users/signup";
  private loginUrl: string = "http://localhost/api/users/login";
  constructor(private http_Client: HttpClient) {}

  private savetokenToLocalstroge(token: string) {
    localStorage.setItem("token", "Bearer " + token);
  }
  getToken() {
    return localStorage.getItem("token") ? localStorage.getItem("token") : "";
  }
  createUser(userobj: any) {
    return this.http_Client.post(this.baseUrl, userobj).pipe(
      map((result) => {
        return <{ message: string }>result;
      })
    );
  }
  loginUser(credential: { email: string; password: string }) {
    return this.http_Client.post(this.loginUrl, credential).pipe(
      map((loginresp: { message: string; token: string }) => {
        this.savetokenToLocalstroge(loginresp.token);
        return loginresp;
      })
    );
  }
}
