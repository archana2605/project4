import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformssComponent } from './reactiveformss.component';

describe('ReactiveformssComponent', () => {
  let component: ReactiveformssComponent;
  let fixture: ComponentFixture<ReactiveformssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
