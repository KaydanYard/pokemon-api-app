import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _http: HttpClient) { }

  getPokemon(id: number) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + id
    return this._http.get(url);
  }
}
