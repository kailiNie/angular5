import { TestBed, inject } from '@angular/core/testing';

import { HttpServices } from './http.service';

describe('HttpServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServices]
    });
  });

  it('should be created', inject([HttpServices], (service: HttpServices) => {
    expect(service).toBeTruthy();
  }));
});
