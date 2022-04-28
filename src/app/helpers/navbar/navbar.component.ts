import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selectedPage: any;
  signedIn: boolean;
  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    // Navbar Title Getter
    let thePath = window.location.href
    const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)

    if (lastItem == "home") {
      this.selectedPage = "Poké Home"
    } else if (lastItem == "pokefind") {
      this.selectedPage = "Pokéfind"
    } else if (lastItem == "sign-up") {
      this.selectedPage = "Sign Up"
    } else {
      this.selectedPage = lastItem
    }

    if (this.authenticationService.isLoggedIn == true) {
      this.signedIn = true;
    }
  }
}
