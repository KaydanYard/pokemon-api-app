import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './pokefind.component.html',
  styleUrls: ['./pokefind.component.scss']
})

export class PokefindComponent implements OnInit {
  data: any;

  // Favorite
  favorite: boolean;
  favoriteText: string;


  // MatPaginator Inputs
  length = 898;
  pageSize = 1;
  pageSizeOptions: number[] = [1];
  pageIndex: number;

  // MatPaginator Output
  pageEvent: PageEvent;
  signedIn: boolean;

  constructor(
    private apiService: ApiService, public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn == true) {
      this.signedIn = true;
    }
  }

  displayPokemon(pokemonId: any) {
    this.apiService.getPokemon(pokemonId).subscribe((pokemon: any) => {
      this.data = pokemon;
      this.pageIndex = pokemonId;
      this.displayFavorite()
    })
  }

  displayFavorite() {
    if (this.favorite == true) {
      this.favoriteText = 'favorite'
    } else if (this.favorite == false) {
      this.favoriteText = 'favorite_border'
    } else {
      this.favoriteText = 'favorite_border'
    }
  }

  checkFavorite() {
    if (this.favorite == true) {
      this.favorite = false;
      console.log(this.favorite)
      this.displayFavorite()
    } else {
      this.favorite = true;
      console.log(this.favorite)
      this.displayFavorite()
    }
  }

  onChangePage(pageEvent: PageEvent) {
    this.displayPokemon(pageEvent.pageIndex)
  }
}