import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

const url = 'http://localhost:3000/pokemons';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  constructor(
    private http: HttpClient,
  ) {}

  public findAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(url);
  }
  public add(p: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(url, p);
  }
  public update(p: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(url + '/' + p.id, p);
  }
  public delete(p: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(url + '/' + p.id);
  }
}
