import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupingMahasiswaComponent } from './grouping-mahasiswa.component';

describe('GroupingMahasiswaComponent', () => {
  let component: GroupingMahasiswaComponent;
  let fixture: ComponentFixture<GroupingMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupingMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupingMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
