import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pokemons = POKEMONS;
  constructor() { }

  ngOnInit(): void {
  }

}
