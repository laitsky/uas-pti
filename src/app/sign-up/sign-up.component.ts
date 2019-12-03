import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
declare var particlesJS: any;
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/SignUpParticles.json', null);
  }
  signUp() {}
}
