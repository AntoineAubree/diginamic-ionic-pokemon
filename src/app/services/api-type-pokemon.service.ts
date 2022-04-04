import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypePokemon } from '../models/type-pokemon';

const url = 'http://localhost:3000/typesPokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiTypePokemonService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<TypePokemon[]> {
    return this.http.get<TypePokemon[]>(url);
  }
  public add(t: TypePokemon): Observable<TypePokemon> {
    return this.http.post<TypePokemon>(url, t);
  }
  public update(t: TypePokemon): Observable<TypePokemon> {
    return this.http.put<TypePokemon>(url + '/' + t.id, t);
  }
  public delete(t: TypePokemon): Observable<TypePokemon> {
    return this.http.delete<TypePokemon>(url + '/' + t.id);
  }
}
