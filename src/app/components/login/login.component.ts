import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  // loginForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl(['', Validators.required, Validators.minLength(5)])
  // });

  // onSubmit() {
  //   this.login()
  // }

  // login(): void {
  //   let username = this.loginForm.get('username').value;
  //   let password = this.loginForm.get('password').value;
  //   this.authenticationService.login(username, password).subscribe(() => this.router.navigateByUrl("/"));
  // }

}