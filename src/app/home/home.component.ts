import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../_shared/models/user-profile";
import * as jwt_decode from "jwt-decode";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public user: UserProfile;
  public currUsername: string;
  constructor(private pelayan: PelayanApiService) {}

  ngOnInit() {
    let bearerToken = localStorage.getItem("token");
    let decodedBT = jwt_decode(bearerToken);
    let username = decodedBT.user.user_name;
    console.log(decodedBT)
    console.log(username);
    this.currUsername = username;
    this.pelayan.getLoginUsername(this.currUsername).subscribe(
      result => (this.user = result),
      error => console.log(error)
    );

    
  }
}
