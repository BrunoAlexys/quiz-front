import { TestBed } from '@angular/core/testing';

import { FormularioSelecaoService } from './formulario-selecao.service';

describe('FormularioSelecaoService', () => {
  let service: FormularioSelecaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioSelecaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
