import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGlobalComponent } from './request-global.component';

describe('RequestGlobalComponent', () => {
  let component: RequestGlobalComponent;
  let fixture: ComponentFixture<RequestGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
