import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SHA512 } from "crypto-js";
import * as $ from "jquery";
declare var particlesJS: any;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  remember_me: boolean;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    particlesJS.load("particles-js", "assets/LoginParticles.json", null);
    
    console.log($("#rm-checkbox").is(":checked"));
  }

  login() {
    this.http
      .post(
        "http://umn-pti2019.herokuapp.com/api/login",
        {
          user_name: this.username,
          password: SHA512(this.password).toString(),
          remember_me: $("#rm-checkbox").is(":checked") ? this.remember_me = true : this.remember_me = false
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          if (response["token"]) {
            localStorage.setItem("token", response["token"]);
            this.router.navigate(["/home"]);
          }
        },
        error => alert(error.error.message)
      );
  }
}
