import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ContactPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be invalid if fields are empty', () => {
    component.name.setValue('');
    component.email.setValue('');
    component.message.setValue('');
    expect(component.contactForm.valid).toBeFalse();
  });
  //TODO: Check name

  // TODO: Check email

  // TODO: Check message


  // check all
  it('should send email if fields are valid', () => {
    component.name.setValue('Leia Organa');
    component.email.setValue('princess.general@alderaan.com');
    component.message.setValue("You're my only hope");
    expect(component.contactForm.valid).toBeTrue();
  });

  // TODO: test email functionality
});
