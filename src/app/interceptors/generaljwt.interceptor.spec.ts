import { TestBed } from '@angular/core/testing';

import { GeneraljwtInterceptor } from './generaljwt.interceptor';

describe('GeneraljwtInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GeneraljwtInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GeneraljwtInterceptor = TestBed.inject(GeneraljwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
