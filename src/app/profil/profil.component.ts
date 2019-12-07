import { Component, OnInit } from '@angular/core';
import { UserProfile } from "../_shared/models/user-profile";
import * as jwt_decode from "jwt-decode";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  nama_lengkap: string;

  public user: UserProfile;
  public currUsername: string;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    })
  };
  constructor(private http: HttpClient, private pelayan: PelayanApiService) { }

  ngOnInit() {
    let bearerToken = localStorage.getItem("token");
    let decodedBT = jwt_decode(bearerToken);
    let username = decodedBT.user.user_name;
    console.log(decodedBT);
    console.log(username);
    this.currUsername = username;
    this.pelayan.getLoginUsername(this.currUsername).subscribe(
      result => (this.user = result),
      error => console.log(error)
    );
  }

  save() {
    this.http
      .put(
        "https://umn-pti2019.herokuapp.com/api/update",
        {
          nama_lengkap: this.user.result.nama_lengkap
        },
        this.httpOptions
      )
      .subscribe(
        response => console.log(response), error => console.log(error)
      );
  }
}
