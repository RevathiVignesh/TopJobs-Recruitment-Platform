import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JshomeComponent } from './jshome.component';

describe('JshomeComponent', () => {
  let component: JshomeComponent;
  let fixture: ComponentFixture<JshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
