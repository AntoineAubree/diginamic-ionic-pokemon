import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pokemon } from '../../models/pokemon';
import { ApiPokemonService } from '../../services/api-pokemon.service';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonObservableService } from '../../services/observables/pokemon-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  subscription$: Subscription;
  pokemonList!: Pokemon[];
  pokemonListDisplayed!: Pokemon[];
  searchStr!: string;

  constructor(
    private pokemonObservableservice: PokemonObservableService,
    private apiPokemonService: ApiPokemonService,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit(): void {
    this.loadPokemonList();
    this.subscription$ = this.pokemonObservableservice
    .getPokemonListSubject()
    .subscribe((data) => {
      this.pokemonList = data;
      this.pokemonListDisplayed = this.pokemonList;
      if (this.searchStr) {
        this.search(this.searchStr);
      }
      });
  }

  loadPokemonList(): void {
    this.apiPokemonService.findAll().subscribe(
      (data) => this.pokemonObservableservice.setPokemonListSubject(data),
      (error) => {
        console.log(`erreur de chargement de la liste de pokemon `, error);
      }
    );
  }

  search(searchStr: string): void {
    this.searchStr = searchStr;
    this.pokemonListDisplayed = this.pokemonList.filter(elt => elt.name.toLowerCase().includes(searchStr.toLowerCase()));
  }

  async openEditModal(pokemon: Pokemon) {
    this.openModal(pokemon, EditPokemonComponent);
  }

  async openDeleteModal(pokemon: Pokemon) {
    this.openModal(pokemon, DeletePokemonComponent);
  }

  async openModal(pokemon: Pokemon, component: any) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps: {
        pokemon,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data?.reloadData) {
        this.loadPokemonList();
      }
    });
    return modal.present();
  }

  orderBy(orderStr: string) {
    if (orderStr === 'name') {
      this.pokemonListDisplayed = this.pokemonListDisplayed.sort((elt1, elt2) => elt1.name.localeCompare(elt2.name));
    } else if (orderStr === 'index') {
      this.pokemonListDisplayed = this.pokemonListDisplayed.sort((elt1, elt2) => elt1.index - elt2.index);
    }
  }

}
