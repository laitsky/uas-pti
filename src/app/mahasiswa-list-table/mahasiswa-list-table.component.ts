import { Component, OnInit } from "@angular/core";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { MahasiswaList } from "../_shared/models/mahasiswa-list";

@Component({
  selector: "app-mahasiswa-list-table",
  templateUrl: "./mahasiswa-list-table.component.html",
  styleUrls: ["./mahasiswa-list-table.component.css"]
})
export class MahasiswaListTableComponent implements OnInit {
  public mahasiswa: MahasiswaList;
  constructor(private pelayan: PelayanApiService) {}

  ngOnInit() {
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
  }
}
