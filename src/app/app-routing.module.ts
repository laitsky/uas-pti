import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MahasiswaListComponent } from "./mahasiswa-list/mahasiswa-list.component";
import { MahasiswaDetailComponent } from "./mahasiswa-detail/mahasiswa-detail.component";
import { ProfilKelompokComponent } from "./profil-kelompok/profil-kelompok.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { MahasiswaListTableComponent } from "./mahasiswa-list-table/mahasiswa-list-table.component";
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "mahasiswa",
    component: MahasiswaListComponent
  },
  {
    path: "mahasiswa-tabel",
    component: MahasiswaListTableComponent
  },
  {
    path: "mahasiswa-tabel/:nim",
    redirectTo: "/mahasiswa/:nim"
  },
  {
    path: "mahasiswa/:nim",
    component: MahasiswaDetailComponent
  },
  {
    path: "profil-kelompok",
    component: ProfilKelompokComponent
  },
  {
    path: "404",
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
