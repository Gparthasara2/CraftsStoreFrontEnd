import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninUBComponent } from './signin-ub.component';

describe('SigninUBComponent', () => {
  let component: SigninUBComponent;
  let fixture: ComponentFixture<SigninUBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninUBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninUBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
