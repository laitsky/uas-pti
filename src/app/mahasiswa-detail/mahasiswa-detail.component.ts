import { Component, OnInit } from "@angular/core";
import { MahasiswaResult } from "../_shared/models/mahasiswa-result";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import { DatePipe } from "@angular/common";
import * as $ from "jquery";
import { SHA512 } from "crypto-js";
@Component({
  selector: "app-mahasiswa-detail",
  templateUrl: "./mahasiswa-detail.component.html",
  styleUrls: ["./mahasiswa-detail.component.css"]
})
export class MahasiswaDetailComponent implements OnInit {
  updateUrl: string = "http://umn-pti2019.herokuapp.com/api/mahasiswa";
  nama_lengkap: string;
  foto: string;
  telepon: string;
  alamat: string;
  prodi: string;
  tanggal_lahir: string;
  angkatan: number;
  public mahasiswa: MahasiswaResult;
  public currentNIM: string;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  constructor(
    private pelayan: PelayanApiService,
    private route: ActivatedRoute,
    private http: HttpClient,
    public dateFormatPipe: DatePipe
  ) {}

  ngOnInit() {
    this.currentNIM = this.route.snapshot.paramMap.get("nim");
    this.pelayan.getMahasiswaByNIM(this.currentNIM).subscribe(
      result => (this.mahasiswa = result),
      error => alert(error.error.info)
    );
  }

  save() {
    this.http
      .put(
        `http://umn-pti2019.herokuapp.com/api/mahasiswa/${this.mahasiswa.result.nim}`,
        {
          nama_lengkap: $("#nama-lengkap").val(),
          foto: $("#foto").val(),
          telepon: $("#telepon").val(),
          alamat: $("#alamat").val(),
          prodi: $("#prodi").val(),
          tanggal_lahir: this.dateFormatPipe.transform(
            $("#tanggal-lahir").val(),
            "yyyy-MM-dd"
          ),
          angkatan: $("#angkatan").val()
        },
        this.httpOptions
      )
      .subscribe(
        response => {
          $("#mhs-update-alert")
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
