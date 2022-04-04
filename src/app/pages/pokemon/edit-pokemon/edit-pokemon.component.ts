import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Pokemon } from '../../../models/pokemon';
import { TypePokemon } from '../../../models/type-pokemon';
import { ApiPokemonService } from '../../../services/api-pokemon.service';
import { ApiTypePokemonService } from '../../../services/api-type-pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss'],
})
export class EditPokemonComponent implements OnInit {
  editForm!: FormGroup;
  editTypeForm!: FormGroup;
  types!: TypePokemon[];
  pokemon!: Pokemon;
  action!: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiPokemonService: ApiPokemonService,
    private apiTypePokemonService: ApiTypePokemonService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.action = this.pokemon ? 'update' : 'add';
    this.initEditForm(new Pokemon());
    this.initEditTypeForm();
    this.apiTypePokemonService.findAll().subscribe(
      (data) => {
        this.types = data;
        this.displayDom();
      },
      (error) => {
        console.log(`erreur de chargement de la liste de types : `, error);
      }
    );
  }

  initEditForm(pokemon: Pokemon): void {
    let indexType = -1;
    if (this.types && this.action === 'update') {
      indexType = this.types.findIndex((type) => type.id === pokemon.type.id);
    }
    this.editForm = this.formBuilder.group({
      id: [pokemon.id],
      name: [pokemon.name, [Validators.required]],
      index: [
        pokemon.index,
        [Validators.required, Validators.min(1), Validators.max(150)],
      ],
      type: [
        indexType >= 0 && this.types.length > indexType
          ? this.types[indexType]
          : '',
        [Validators.required],
      ],
    });
  }

  initEditTypeForm(): void {
    this.editTypeForm = this.formBuilder.group({
      type: ['', [Validators.required]],
    });
  }

  displayDom() {
    if (this.action === 'update') {
      this.initEditForm(this.pokemon);
    }
  }

  edit(): void {
    if (this.action === 'add') {
      this.apiPokemonService.add(this.editForm.value).subscribe(
        (data) => this.closeModal(true),
        (error) => alert(`L'ajout n'a pas fonctionné`)
      );
    } else if (this.action === 'update') {
      this.apiPokemonService.update(this.editForm.value).subscribe(
        (data) => this.closeModal(true),
        (error) => alert(`La mise à jour n'a pas fonctionnée`)
      );
    }
  }

  editType(): void {
    this.apiTypePokemonService.add(this.editTypeForm.value).subscribe(
      (data) => {
        this.apiTypePokemonService.findAll().subscribe(
          (dataList) => {
            this.types = dataList;
          },
          (error) => {
            console.log(`erreur de chargement de la liste de types : `, error);
          }
        );
      },
      (error) => alert(`L'ajout n'a pas fonctionné`)
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
