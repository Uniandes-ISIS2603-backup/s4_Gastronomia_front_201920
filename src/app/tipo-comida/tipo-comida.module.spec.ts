import { TipoComidaModule } from './tipo-comida.module';

describe('TipoComidaModule', () => {
  let tipoComidaModule: TipoComidaModule;

  beforeEach(() => {
    tipoComidaModule = new TipoComidaModule();
  });

  it('should create an instance', () => {
    expect(tipoComidaModule).toBeTruthy();
  });
});
