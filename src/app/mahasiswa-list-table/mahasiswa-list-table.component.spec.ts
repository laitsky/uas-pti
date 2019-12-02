import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaListTableComponent } from './mahasiswa-list-table.component';

describe('MahasiswaListTableComponent', () => {
  let component: MahasiswaListTableComponent;
  let fixture: ComponentFixture<MahasiswaListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
