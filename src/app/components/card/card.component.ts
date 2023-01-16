import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() pokemon!: Pokemon;
}
