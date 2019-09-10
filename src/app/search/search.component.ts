import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;
  public result: string;

  constructor() {
    this.query='';
   }

  ngOnInit(): void {
  }

  searchQuery(): string {
    this.result = 'Consulta realizada com query \"' + this.query +'\"';
    return this.result;
  }

  search(): void {

  }


}
