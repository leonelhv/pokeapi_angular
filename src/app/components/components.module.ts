import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SearchComponent, CardComponent],
  imports: [CommonModule],
  exports: [SearchComponent, CardComponent],
})
export class ComponentsModule {}
