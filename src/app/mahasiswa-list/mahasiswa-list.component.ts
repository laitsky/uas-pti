import { Component, OnInit } from "@angular/core";
import { MahasiswaList } from "../_shared/models/mahasiswa-list";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
declare var particlesJS: any;
@Component({
  selector: "app-mahasiswa-list",
  templateUrl: "./mahasiswa-list.component.html",
  styleUrls: ["./mahasiswa-list.component.css"]
})
export class MahasiswaListComponent implements OnInit {
  public mahasiswa: MahasiswaList;
  constructor(private pelayan: PelayanApiService) {}

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/MahasiswaListParticles.json', null);
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
  }
}
