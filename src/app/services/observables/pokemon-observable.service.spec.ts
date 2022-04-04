import { TestBed } from '@angular/core/testing';

import { PokemonObservableService } from './pokemon-observable.service';

describe('PokemonObservableService', () => {
  let service: PokemonObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
