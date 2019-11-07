import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComidaCreateComponent } from './tipo-comida-create.component';

describe('TipoComidaCreateComponent', () => {
  let component: TipoComidaCreateComponent;
  let fixture: ComponentFixture<TipoComidaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoComidaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
