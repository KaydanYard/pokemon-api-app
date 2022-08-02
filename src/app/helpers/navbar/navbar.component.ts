import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  box: HTMLElement | null;
  selectedPage: any;
  signedIn: boolean;

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    // Navbar Title Getter
    let thePath = window.location.href
    const lastItem = thePath.substring(thePath.lastIndexOf('/') + 1)
    const box = document.getElementById(lastItem + "Btn");


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

    box?.addEventListener('click', function handleClick() {
      console.log("Button Pressed")
      box.classList.add('selectedNav')
    });
  }

}
