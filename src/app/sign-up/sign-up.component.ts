import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SHA512 } from "crypto-js";

declare var particlesJS: any;
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  username: string;
  telepon: string;
  email: string;
  nama_lengkap: string;
  alamat: string;
  tanggal_lahir: string;
  foto: string;
  password: string;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json " })
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    particlesJS.load("particles-js", "assets/SignUpParticles.json", null);
  }

  signUp() {
    this.http
      .post(
        "http://umn-pti2019.herokuapp.com/api/register",
        {
          user_name: this.username,
          telepon: this.telepon,
          email: this.email,
          nama_lengkap: this.nama_lengkap,
          alamat: this.alamat,
          tanggal_lahir: this.tanggal_lahir,
          foto: this.foto,
          password: SHA512(this.password).toString()
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          if (response["token"] != null) {
            localStorage.setItem("uas-pti-token", response["token"]);
            this.router.navigate(["/login"]);
          }
        },
        error => alert(error.error.info)
      );
  }
}
