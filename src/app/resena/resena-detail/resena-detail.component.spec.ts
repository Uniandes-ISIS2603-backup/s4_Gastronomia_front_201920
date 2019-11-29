import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaDetailComponent } from './resena-detail.component';

describe('ResenaDetailComponent', () => {
  let component: ResenaDetailComponent;
  let fixture: ComponentFixture<ResenaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
