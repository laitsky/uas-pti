import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "app-profil-kelompok",
  templateUrl: "./profil-kelompok.component.html",
  styleUrls: ["./profil-kelompok.component.css"]
})
export class ProfilKelompokComponent implements OnInit {
  constructor(private location: Location, private _router: Router) {}

  ngOnInit() {}
  goBack(): void {
    this.location.back();
  }
}
