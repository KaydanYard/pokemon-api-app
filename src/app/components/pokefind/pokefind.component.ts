import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  //Search By
  searchBtnNum: number;
  searchBtnText: string;

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

  myArray: any[] = []

  constructor(
    private firestore: AngularFirestore,
    private apiService: ApiService,
    public authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn == true) {
      this.signedIn = true;
    }

    this.checkSearchType()
  }

  checkSearchType() {
    if (this.searchBtnNum === 0) {
      this.searchBtnText = "ID"

    } else if (this.searchBtnNum === 1) {
      this.searchBtnText = "Name"

    } else {
      this.searchBtnNum = 0
      this.checkSearchType()
    }
  }

  changeSearchType() {
    if (this.searchBtnNum === 1) {
      this.searchBtnNum = 0
      this.checkSearchType()
    } else if (this.searchBtnNum === 0) {
      this.searchBtnNum = 1
      this.checkSearchType()
    }
  }

  displayPokemon(pokemonId: any) {
    this.apiService.getPokemon(pokemonId).subscribe((pokemon: any) => {
      this.data = pokemon;
      console.log(this.data)
      this.pageIndex = pokemonId;
      this.favorite = false;
      this.firestore.collection(`users/${this.authenticationService.userData.uid}/favorites`)
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.data.documentID = doc.id
            if (doc.get("pokemonID") == this.pageIndex) {
              this.favorite = true;
              return this.displayFavorite()
            }
          });
        });
      this.displayFavorite()
    })
  }

  displayFavorite() {

    if (this.favorite == true) {
      this.favoriteText = 'favorite'
    } else if (this.favorite == false) {
      this.favoriteText = 'favorite_border'
    } else {
      this.favorite = false
      this.favoriteText = 'favorite_border'
    }
  }

  checkFavorite(pokeName: string, pokeID: number, selectedDoc: string) {

    if (this.favorite == true) {
      this.favorite = false;
      this.firestore.collection(`users/${this.authenticationService.userData.uid}/favorites`)
        .doc(selectedDoc).delete()
      this.displayFavorite()
    } else {
      this.favorite = true;
      this.firestore.collection(`users/${this.authenticationService.userData.uid}/favorites`)
        .add({ pokemonName: pokeName, pokemonID: pokeID })
      this.displayFavorite()
    }
  }

  onChangePage(pageEvent: PageEvent) {
    this.displayPokemon(pageEvent.pageIndex)
  }
}