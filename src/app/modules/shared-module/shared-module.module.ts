import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [SearchBarComponent],
})
export class SharedModuleModule {}
