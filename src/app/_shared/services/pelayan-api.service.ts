import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { MahasiswaList } from "../models/mahasiswa-list";
import { MahasiswaResult } from "../models/mahasiswa-result";

@Injectable({
  providedIn: "root"
})
export class PelayanApiService {
  private API_URL: string = "https://umn-pti2019.herokuapp.com";

  constructor(private HTTP: HttpClient) {}

  getAllMahasiswa(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(`${this.API_URL}/api/mahasiswa`);
  }

  getMahasiswaByNIM(nim: string): Observable<MahasiswaResult> {
    return this.HTTP.get<MahasiswaResult>(
      `${this.API_URL}/api/mahasiswa/${nim}`
    );
  }
}
