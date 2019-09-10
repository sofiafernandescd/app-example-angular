import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  public query: string;
  public result: string;
  @Input()
  labelButton: string;
  @Input()
  placeholder: string;
  @Output()
  searchEvent = new EventEmitter();
  

  constructor() {
    this.query='';
   }

  ngOnInit(): void {
    this.labelButton = this.labelButton ? this.labelButton : 'Find!';
    this.placeholder = this.placeholder ? this.placeholder : 'Escreva a sua query';
  }

  

  search(): void {
    this.result = 'Consulta realizada com query \"' + this.query +'\"';
    this.searchEvent.emit({query: this.query, resultado: this.result});
  }

}
