import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SHA512 } from "crypto-js";
import { MustMatch } from './must-match.validator';

declare var particlesJS: any;
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json " })
  };

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    particlesJS.load("particles-js", "assets/SignUpParticles.json", null);

    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      telepon: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nama_lengkap: ['', Validators.required],
      alamat: ['', Validators.required],
      tanggal_lahir: ['', Validators.required],
      foto: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  signUp() {
    this.submitted = true;

    if(this.signUpForm.invalid){
      return;
    }
    else {
      this.http
        .post(
          "http://umn-pti2019.herokuapp.com/api/register",
          this.signUpForm.value,
          /*
          {  
            user_name: this.username,
            telepon: this.telepon,
            email: this.email,
            nama_lengkap: this.nama_lengkap,
            alamat: this.alamat,
            tanggal_lahir: this.tanggal_lahir,
            foto: this.foto,
            password: SHA512(this.password).toString(),
            
          },
          */
          this.httpOptions
        )
        .subscribe(
          response => {
            if (response["token"]) {
              localStorage.setItem("token", response["token"]);
              this.router.navigate(["/login"]);
            }
          },
          error => alert(error.error.info)
        );
    }
  }
}
