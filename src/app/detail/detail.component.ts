import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../bdd/pokedes';
import { Pokemons } from '../models/pokemons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
pokemons = POKEMONS;
pokemon : Pokemons = new Pokemons();
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let id = this.route.snapshot.params['id'];
    for(let i = 0; i < this.pokemons.length; i++){
      if(this.pokemons[i].id == id){
        this.pokemon = this.pokemons[i];
      }
    }
    console.log(id);
  }

}
