import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterpassingComponent } from './parameterpassing.component';

describe('ParameterpassingComponent', () => {
  let component: ParameterpassingComponent;
  let fixture: ComponentFixture<ParameterpassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterpassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterpassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
