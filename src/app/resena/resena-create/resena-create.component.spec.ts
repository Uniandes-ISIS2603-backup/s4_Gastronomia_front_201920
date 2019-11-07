import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenaCreateComponent } from './resena-create.component';

describe('ResenaCreateComponent', () => {
  let component: ResenaCreateComponent;
  let fixture: ComponentFixture<ResenaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
