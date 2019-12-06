import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { MahasiswaList } from "../models/mahasiswa-list";
import { MahasiswaResult } from "../models/mahasiswa-result";
import { UserProfile } from "../models/user-profile";

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

  getLoginUsername(username: string): Observable<UserProfile> {
    return this.HTTP.get<UserProfile>(`${this.API_URL}/api/user/${username}`);
  }

  /* HTTP GET REQUEST BERDASARKAN SORTING DAN ORDER */
  sortByNameAsc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=nama_lengkap&order=asc`
    );
  }
  sortByNameDesc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=nama_lengkap&order=desc`
    );
  }

  sortByNimAsc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=nim&order=asc`
    );
  }

  sortByNimDesc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=nim&order=desc`
    );
  }

  sortByIdAsc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=id&order=asc`
    );
  }

  sortByIdDesc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=id&order=desc`
    );
  }

  sortByCreatedAsc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=created_at&order=asc`
    );
  }

  sortByCreatedDesc(): Observable<MahasiswaList> {
    return this.HTTP.get<MahasiswaList>(
      `${this.API_URL}/api/mahasiswa?sort=created_at&order=desc`
    );
  }
}
