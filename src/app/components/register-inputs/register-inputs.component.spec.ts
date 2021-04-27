import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInputsComponent } from './register-inputs.component';

describe('RegisterInputsComponent', () => {
  let component: RegisterInputsComponent;
  let fixture: ComponentFixture<RegisterInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
