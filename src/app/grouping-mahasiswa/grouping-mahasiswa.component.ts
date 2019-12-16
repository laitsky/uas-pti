import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { MahasiswaList } from "../_shared/models/mahasiswa-list";

@Component({
  selector: 'app-grouping-mahasiswa',
  templateUrl: './grouping-mahasiswa.component.html',
  styleUrls: ['./grouping-mahasiswa.component.css']
})
export class GroupingMahasiswaComponent implements OnInit {
  public mahasiswa: MahasiswaList;
  kelompokA: Array<any> = [];
  constructor(private pelayan: PelayanApiService) { }

  ngOnInit() {
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
  }

  add(mhs_nama: string, mhs_nim: string) {
    this.kelompokA.push({mhs_nama, mhs_nim});
    console.log(this.kelompokA);
  }
}
