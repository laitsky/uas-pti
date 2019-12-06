import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { MahasiswaList } from "../_shared/models/mahasiswa-list";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kelompok-mahasiswa',
  templateUrl: './kelompok-mahasiswa.component.html',
  styleUrls: ['./kelompok-mahasiswa.component.css']
})
export class KelompokMahasiswaComponent implements OnInit {
  public mahasiswa: MahasiswaList;

  constructor(public pelayan: PelayanApiService, public HTTP: HttpClient) { }

  ngOnInit() {
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
    }

    AddToKelompok(){
      
    }

}
