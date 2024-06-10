import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregComponent } from './empreg.component';

describe('EmpregComponent', () => {
  let component: EmpregComponent;
  let fixture: ComponentFixture<EmpregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
