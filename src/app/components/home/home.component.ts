import { Component, OnInit } from '@angular/core';
import { MainClient } from 'pokenode-ts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.data = this.apiService.getPokemon()
  }

}
