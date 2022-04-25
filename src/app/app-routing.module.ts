import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokefindComponent } from './components/pokefind/pokefind.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "pokefind", component: PokefindComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
