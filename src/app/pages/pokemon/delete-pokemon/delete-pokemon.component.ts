import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../models/pokemon';
import { ModalController } from '@ionic/angular';
import { ApiPokemonService } from '../../../services/api-pokemon.service';

@Component({
  selector: 'app-delete-pokemon',
  templateUrl: './delete-pokemon.component.html',
  styleUrls: ['./delete-pokemon.component.scss'],
})
export class DeletePokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private apiPokemonService: ApiPokemonService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  delete(): void {
    this.apiPokemonService.delete(this.pokemon).subscribe(
      (data) => this.closeModal(true),
      (error) => alert(`La suppression n'a pas fonctionnée`)
    );
  }

  cancel(): void {
    this.closeModal(false);
  }

  closeModal(reloadData: boolean): void {
    this.modalCtrl.dismiss({
      reloadData,
    });
  }

}
