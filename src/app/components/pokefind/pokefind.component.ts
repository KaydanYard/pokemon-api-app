import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './pokefind.component.html',
  styleUrls: ['./pokefind.component.scss']
})

export class PokefindComponent implements OnInit {
  data: any;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {

  }

  displayPokemon(pokemonId: any) {
    this.apiService.getPokemon(pokemonId).subscribe((pokemon: any) => {
      this.data = pokemon;
      console.log(this.data);
    })
  }
}