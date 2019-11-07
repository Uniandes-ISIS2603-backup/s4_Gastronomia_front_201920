import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblogListComponent } from './foodblog-list.component';

describe('FoodblogListComponent', () => {
  let component: FoodblogListComponent;
  let fixture: ComponentFixture<FoodblogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodblogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodblogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
