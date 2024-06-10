import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsregComponent } from './jsreg.component';

describe('JsregComponent', () => {
  let component: JsregComponent;
  let fixture: ComponentFixture<JsregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
