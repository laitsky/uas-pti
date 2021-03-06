import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { SHA512 } from "crypto-js";
import * as $ from "jquery";
@Component({
  selector: "app-new-mahasiswa",
  templateUrl: "./new-mahasiswa.component.html",
  styleUrls: ["./new-mahasiswa.component.css"]
})
export class NewMahasiswaComponent implements OnInit {
  nim: string;
  email: string;
  nama_lengkap: string;
  foto: string;
  telepon: string;
  alamat: string;
  prodi: string;
  tanggal_lahir: string;
  angkatan: string;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private dateFormatPipe: DatePipe
  ) {}

  ngOnInit() {}

  addNewMahasiswa() {
    this.http
      .post(
        "https://umn-pti2019.herokuapp.com/api/mahasiswa",
        {
          nim: this.nim,
          email: this.email,
          nama_lengkap: this.nama_lengkap,
          foto: this.foto,
          telepon: this.telepon,
          alamat: this.alamat,
          prodi: this.prodi,
          tanggal_lahir: this.dateFormatPipe.transform(
            this.tanggal_lahir,
            "yyyy-MM-dd"
          ),
          angkatan: this.angkatan
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          $("#new-mhs-alert")
            .addClass("alert alert-success")
            .text(response["info"]);
          $("#form").trigger('reset');
        },
        error => {
          $("#new-mhs-alert")
            .addClass("alert alert-danger")
            .text(error.error.info);
        }
      );
  }
}
