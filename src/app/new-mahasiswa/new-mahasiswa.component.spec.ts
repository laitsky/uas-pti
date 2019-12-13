import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMahasiswaComponent } from './new-mahasiswa.component';

describe('NewMahasiswaComponent', () => {
  let component: NewMahasiswaComponent;
  let fixture: ComponentFixture<NewMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
