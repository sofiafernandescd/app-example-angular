import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Owner } from '../../shared/model/owner.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public query: string;
  public result: string;
  public response: Owner[];

  @Input() labelButton: string;
  @Input() placeholder: string;

  @Output() searchEvent = new EventEmitter();


  constructor() {
    this.query = '';

  }


  search(event): void {
    event.preventDefault();
    this.result = 'Resultado para la búsqueda de "${this.query}".';
    this.searchEvent.emit({ query: this.query })


  }

  ngOnInit() {
    if (this.labelButton === '' || this.labelButton) {
      this.labelButton = 'Buscar';
    }
    this.placeholder = this.placeholder ? this.placeholder : '';
  }
}