import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewacceptedComponent } from './viewaccepted.component';

describe('ViewacceptedComponent', () => {
  let component: ViewacceptedComponent;
  let fixture: ComponentFixture<ViewacceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewacceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
