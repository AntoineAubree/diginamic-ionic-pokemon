import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../../modules/shared-module/shared-module.module';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonPageRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  declarations: [PokemonPage, EditPokemonComponent, DeletePokemonComponent],
})
export class PokemonPageModule {}
