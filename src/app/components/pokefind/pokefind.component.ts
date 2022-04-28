import { Component, Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './pokefind.component.html',
  styleUrls: ['./pokefind.component.scss']
})

export class PokefindComponent implements OnInit {
  data: any;

  // MatPaginator Inputs
  length = 890;
  pageSize = 1;
  pageSizeOptions: number[] = [1];
  pageIndex: number

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {

  }

  displayPokemon(pokemonId: any) {
    this.apiService.getPokemon(pokemonId).subscribe((pokemon: any) => {
      this.data = pokemon;
      this.pageIndex = pokemonId
      console.log(this.data);
      console.log(this.pageIndex)
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onChangePage(pageEvent: PageEvent) {
    console.log(pageEvent.pageIndex)
    this.displayPokemon(pageEvent.pageIndex)
  }
}