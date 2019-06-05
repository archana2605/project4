import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenformssComponent } from './drivenformss.component';

describe('DrivenformssComponent', () => {
  let component: DrivenformssComponent;
  let fixture: ComponentFixture<DrivenformssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivenformssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenformssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
