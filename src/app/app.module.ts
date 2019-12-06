import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilKelompokComponent } from './profil-kelompok/profil-kelompok.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './_shared/components/header/header.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MahasiswaListTableComponent } from './mahasiswa-list-table/mahasiswa-list-table.component';
import { MahasiswaHeaderComponent } from './_shared/components/mahasiswa-header/mahasiswa-header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { KelompokMahasiswaComponent } from './kelompok-mahasiswa/kelompok-mahasiswa.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilKelompokComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    MahasiswaListComponent,
    MahasiswaDetailComponent,
    MahasiswaListTableComponent,
    MahasiswaHeaderComponent,
    SignUpComponent,
    KelompokMahasiswaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
