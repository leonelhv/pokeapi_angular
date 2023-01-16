import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() onSearch = new EventEmitter<string>();

  enviarTermino(termino: string) {
    this.onSearch.emit(termino);
  }
}
