import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedRqstsUBComponent } from './view-accepted-rqsts-ub.component';

describe('ViewAcceptedRqstsUBComponent', () => {
  let component: ViewAcceptedRqstsUBComponent;
  let fixture: ComponentFixture<ViewAcceptedRqstsUBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcceptedRqstsUBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcceptedRqstsUBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
