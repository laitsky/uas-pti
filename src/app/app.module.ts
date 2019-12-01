import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilKelompokComponent } from './profil-kelompok/profil-kelompok.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './_shared/components/header/header.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MahasiswaDetailComponent } from './mahasiswa-detail/mahasiswa-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfilKelompokComponent,
    RegisterComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    MahasiswaListComponent,
    MahasiswaDetailComponent,
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
