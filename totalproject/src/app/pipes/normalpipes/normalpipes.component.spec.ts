import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpipesComponent } from './normalpipes.component';

describe('NormalpipesComponent', () => {
  let component: NormalpipesComponent;
  let fixture: ComponentFixture<NormalpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
