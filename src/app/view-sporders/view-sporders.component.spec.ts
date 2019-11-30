import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSPOrdersComponent } from './view-sporders.component';

describe('ViewSPOrdersComponent', () => {
  let component: ViewSPOrdersComponent;
  let fixture: ComponentFixture<ViewSPOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSPOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSPOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
