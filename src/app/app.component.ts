import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public msgEventSearch: string;
  title = 'app-oiiii';
  constructor() {
    setTimeout(
      ()=>{this.title='Hello World';}, 2000);
  }
  searchMsg(event) {
    this.msgEventSearch = event.query+' => '+event.resultado;
  }
}



