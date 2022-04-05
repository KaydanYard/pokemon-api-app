import { Injectable } from '@angular/core';
import { MainClient } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  getPokemon() {
    (async () => {
      const api = new MainClient();

      await api.pokemon
        .getPokemonByName('luxray')
        .then((data) => console.log(data.name)) // will output "Luxray"
        .catch((error) => console.error(error));
    })();
  }

}
