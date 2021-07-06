import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhargawaComponent } from './bhargawa.component';

describe('BhargawaComponent', () => {
  let component: BhargawaComponent;
  let fixture: ComponentFixture<BhargawaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhargawaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhargawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
