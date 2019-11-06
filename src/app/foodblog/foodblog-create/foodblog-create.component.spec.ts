import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblogCreateComponent } from './foodblog-create.component';

describe('FoodblogCreateComponent', () => {
  let component: FoodblogCreateComponent;
  let fixture: ComponentFixture<FoodblogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodblogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodblogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
