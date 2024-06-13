import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmainComponent } from './jobmain.component';

describe('JobmainComponent', () => {
  let component: JobmainComponent;
  let fixture: ComponentFixture<JobmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
