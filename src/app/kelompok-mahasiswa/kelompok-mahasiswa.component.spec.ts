import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelompokMahasiswaComponent } from './kelompok-mahasiswa.component';

describe('KelompokMahasiswaComponent', () => {
  let component: KelompokMahasiswaComponent;
  let fixture: ComponentFixture<KelompokMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelompokMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelompokMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
