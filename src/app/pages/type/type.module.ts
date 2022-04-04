import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypePageRoutingModule } from './type-routing.module';

import { TypePage } from './type.page';
import { EditTypeComponent } from './edit-type/edit-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TypePage,
  EditTypeComponent]
})
export class TypePageModule {}
