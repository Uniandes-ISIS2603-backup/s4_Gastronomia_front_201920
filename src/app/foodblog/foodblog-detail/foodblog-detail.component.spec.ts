import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblogDetailComponent } from './foodblog-detail.component';

describe('FoodblogDetailComponent', () => {
  let component: FoodblogDetailComponent;
  let fixture: ComponentFixture<FoodblogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodblogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodblogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
