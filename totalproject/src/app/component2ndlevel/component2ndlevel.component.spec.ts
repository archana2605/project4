import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2ndlevelComponent } from './component2ndlevel.component';

describe('Component2ndlevelComponent', () => {
  let component: Component2ndlevelComponent;
  let fixture: ComponentFixture<Component2ndlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2ndlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2ndlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
