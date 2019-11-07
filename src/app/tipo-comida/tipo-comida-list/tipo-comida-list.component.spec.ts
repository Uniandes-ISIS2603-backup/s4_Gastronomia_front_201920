import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoComidaListComponent } from './tipo-comida-list.component';

describe('TipoComidaListComponent', () => {
  let component: TipoComidaListComponent;
  let fixture: ComponentFixture<TipoComidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoComidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoComidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
