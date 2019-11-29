import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestServiceUserComponent } from './request-service-user.component';

describe('RequestServiceUserComponent', () => {
  let component: RequestServiceUserComponent;
  let fixture: ComponentFixture<RequestServiceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestServiceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestServiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
