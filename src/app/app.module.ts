import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
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
import { NewMahasiswaComponent } from './new-mahasiswa/new-mahasiswa.component';
import { AuthGuardService } from './_shared/guards/auth-guard.service';
import { ProfilComponent } from './profil/profil.component';
import { FilterPipe } from './_shared/pipes/filter.pipe';
import { GroupingMahasiswaComponent } from './grouping-mahasiswa/grouping-mahasiswa.component';
import { DatePipe } from '@angular/common';

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
    NewMahasiswaComponent,
    ProfilComponent,
    FilterPipe,
    GroupingMahasiswaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  providers: [AuthGuardService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
