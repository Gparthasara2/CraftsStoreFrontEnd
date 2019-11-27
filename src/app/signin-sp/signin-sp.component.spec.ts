import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSPComponent } from './signin-sp.component';

describe('SigninSPComponent', () => {
  let component: SigninSPComponent;
  let fixture: ComponentFixture<SigninSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
