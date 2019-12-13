import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../_shared/models/user-profile";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import * as $ from "jquery";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.css"]
})
export class ProfilComponent implements OnInit {
  updateUrl: string = "https://umn-pti2019.herokuapp.com/api/update";
  nama_lengkap: string;
  alamat: string;
  tanggal_lahir: string;
  password: string;

  public user: UserProfile;
  public currUsername: string;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };
  constructor(private http: HttpClient, private pelayan: PelayanApiService) {}

  ngOnInit() {
    let bearerToken = localStorage.getItem("token");
    let decodedBT = jwt_decode(bearerToken);
    let username = decodedBT.user.user_name;
    this.currUsername = username;
    this.pelayan.getLoginUsername(this.currUsername).subscribe(
      result => {(this.user = result); console.log(this.user.result)},
      error => alert(error.error.info)
    );
  }

  save() {
    this.http
      .put(
        this.updateUrl,
        {
          nama_lengkap: $("#nama-lengkap").val()
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          $("#profil-update-alert")
            .addClass("alert alert-success")
            .text(response["info"]);
          setTimeout(() => window.location.reload(), 1500);
        },
        error => {
          $("#profil-update-alert")
          .addClass("alert alert-danger")
          .text(error.error.info);
        }
      );
  }
}
