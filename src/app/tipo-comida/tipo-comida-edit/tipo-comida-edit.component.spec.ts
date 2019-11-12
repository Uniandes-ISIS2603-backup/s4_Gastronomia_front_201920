import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComidaEditComponent } from './tipo-comida-edit.component';

describe('TipoComidaEditComponent', () => {
  let component: TipoComidaEditComponent;
  let fixture: ComponentFixture<TipoComidaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoComidaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
