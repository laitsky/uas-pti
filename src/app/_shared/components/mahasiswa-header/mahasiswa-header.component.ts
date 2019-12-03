import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: "app-mahasiswa-header",
  templateUrl: "./mahasiswa-header.component.html",
  styleUrls: ["./mahasiswa-header.component.css"]
})
export class MahasiswaHeaderComponent implements OnInit {
  constructor(public _router: Router) {}

  ngOnInit() {}
}
