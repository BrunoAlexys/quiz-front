import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSelecaoComponent } from './formulario-selecao.component';

describe('FormularioSelecaoComponent', () => {
  let component: FormularioSelecaoComponent;
  let fixture: ComponentFixture<FormularioSelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioSelecaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
