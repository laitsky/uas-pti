import { Component, OnInit } from "@angular/core";
import { MahasiswaResult } from "../_shared/models/mahasiswa-result";
import { PelayanApiService } from "../_shared/services/pelayan-api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-mahasiswa-detail",
  templateUrl: "./mahasiswa-detail.component.html",
  styleUrls: ["./mahasiswa-detail.component.css"]
})
export class MahasiswaDetailComponent implements OnInit {
  public mahasiswa: MahasiswaResult;
  public currentNIM: string;
  constructor(
    private pelayan: PelayanApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentNIM = this.route.snapshot.paramMap.get("nim");
    this.pelayan.getMahasiswaByNIM(this.currentNIM).subscribe(
      result => {
        this.mahasiswa = result;
      },
      error => console.log(error)
    );
  }
}
