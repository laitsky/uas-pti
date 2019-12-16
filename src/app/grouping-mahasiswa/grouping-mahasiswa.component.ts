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
  kelompokB: Array<any> = [];
  constructor(private pelayan: PelayanApiService) { }

  ngOnInit() {
    this.pelayan.getAllMahasiswa().subscribe(result => {
      this.mahasiswa = result;
    });
    document.getElementById("defaultTab").click();
  }

  addToKelA(mhs_nama: string, mhs_nim: string) {
    this.kelompokA.push({mhs_nama, mhs_nim});
  }
  addToKelB(mhs_nama: string, mhs_nim: string) {
    this.kelompokB.push({mhs_nama, mhs_nim});
    console.log(this.kelompokB);
  }

  delMhsKelA(i) {
    this.kelompokA.splice(i, 1);
  }

  delMhsKelB(i) {
    this.kelompokB.splice(i, 1);
  }
 
  deleteAllKelA() {
    this.kelompokA.length = 0;
  }

  deleteAllKelB() {
    this.kelompokB.length = 0;
  }

  openTab(tabName: string) {
      // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab
  document.getElementById(tabName).style.display = "block";
  }
}
