import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../_shared/models/user-profile";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import * as $ from "jquery";
import { SHA512 } from "crypto-js";
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
  foto: string;
  password: string;
  public user: UserProfile;

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
    this.pelayan.getLoginUsername(username).subscribe(
      result => (this.user = result),
      error => alert(error.error.info)
    );
  }

  edit() {
    $("input, button").removeAttr("disabled");
  }
  save() {
    this.http
      .put(
        this.updateUrl,
        {
          nama_lengkap: $("#nama-lengkap").val(),
          alamat: $("#alamat").val(),
          tanggal_lahir: $("#tanggal-lahir").val(),
          foto: $("#foto").val()
          //password: SHA512($("#password").val()).toString()
          
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          $("#profil-update-alert")
            .addClass("alert alert-success")
            .text(
              response["info"] +
                "\nHalaman akan memuat ulang dalam beberapa saat."
            );
          setTimeout(() => window.location.reload(), 2000);
        },
        error => {
          $("#profil-update-alert")
            .addClass("alert alert-danger")
            .text(error.error.info);
        }
      );
  }
}
