import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaHeaderComponent } from './mahasiswa-header.component';

describe('MahasiswaHeaderComponent', () => {
  let component: MahasiswaHeaderComponent;
  let fixture: ComponentFixture<MahasiswaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
