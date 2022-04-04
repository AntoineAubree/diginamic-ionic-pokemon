import { TestBed } from '@angular/core/testing';

import { ApiTypePokemonService } from './api-type-pokemon.service';

describe('ApiTypePokemonService', () => {
  let service: ApiTypePokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTypePokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
