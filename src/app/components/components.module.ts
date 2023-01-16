import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent, CardComponent],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [SearchComponent, CardComponent],
})
export class ComponentsModule {}
