import {OcrModule } from './orthofi.ocr.module';

describe('Orthofi.OcrModule', () => {
  let orthofiOcrModule: OcrModule;

  beforeEach(() => {
    orthofiOcrModule = new OcrModule();
  });

  it('should create an instance', () => {
    expect(orthofiOcrModule).toBeTruthy();
  });
});
