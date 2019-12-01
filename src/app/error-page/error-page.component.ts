import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/ErrorPageComponentParticles.json', null);
  }

}
