import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingComponentComponent } from './knitting-component.component';

describe('KnittingComponentComponent', () => {
  let component: KnittingComponentComponent;
  let fixture: ComponentFixture<KnittingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
