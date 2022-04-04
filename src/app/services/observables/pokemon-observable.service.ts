import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonObservableService {

  pokemonBehaviorSubject$ = new BehaviorSubject<Pokemon[]>(new Array<Pokemon>());

  getPokemonListSubject(): Observable<Pokemon[]> {
      return this.pokemonBehaviorSubject$.asObservable();
  }

  setPokemonListSubject(pokemons: Pokemon[]): void {
      this.pokemonBehaviorSubject$.next(pokemons);
  }

}
