import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpformComponent } from './spform.component';

describe('SpformComponent', () => {
  let component: SpformComponent;
  let fixture: ComponentFixture<SpformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
