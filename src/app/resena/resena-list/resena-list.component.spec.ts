import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaListComponent } from './resena-list.component';

describe('ResenaListComponent', () => {
  let component: ResenaListComponent;
  let fixture: ComponentFixture<ResenaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
