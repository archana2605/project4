import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpworkComponent } from './httpwork.component';

describe('HttpworkComponent', () => {
  let component: HttpworkComponent;
  let fixture: ComponentFixture<HttpworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
