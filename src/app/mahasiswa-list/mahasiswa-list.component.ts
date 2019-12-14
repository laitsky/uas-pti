import { Component, OnInit } from "@angular/core";
import { MahasiswaList } from "../_shared/models/mahasiswa-list";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
@Component({
  selector: "app-mahasiswa-list",
  templateUrl: "./mahasiswa-list.component.html",
  styleUrls: ["./mahasiswa-list.component.css"]
})
export class MahasiswaListComponent implements OnInit {
  public mahasiswa: MahasiswaList;
  searchText: any[];
  constructor(private pelayan: PelayanApiService) {}

  ngOnInit() {
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  /* FUNGSI SORTING DAN ORDERING */
  sortByNameAsc() {
    this.pelayan.sortByNameAsc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByNameDesc() {
    this.pelayan.sortByNameDesc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByNimAsc() {
    this.pelayan.sortByNimAsc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByNimDesc() {
    this.pelayan.sortByNimDesc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByIdAsc() {
    this.pelayan.sortByIdAsc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByIdDesc() {
    this.pelayan.sortByIdDesc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByCreatedAsc() {
    this.pelayan.sortByCreatedAsc().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  sortByCreatedDesc() {
    this.pelayan.sortByCreatedDesc().subscribe(result => {
      this.mahasiswa = result;
    });
  }
}
