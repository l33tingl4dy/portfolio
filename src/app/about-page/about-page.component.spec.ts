import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent } from './about-page.component';

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let today = new Date('May 14, 2020 00:00:00');
    jasmine.clock().mockDate(today);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Day 500 if today is set to May 14, 2020', () => {

    component.calculateRunningDay();
    expect(component.runDay).toEqual(500);
  });
});
