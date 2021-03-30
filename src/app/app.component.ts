import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrar = false;

  constructor(){
    setTimeout(() => {
      this.mostrar = true;
    }, 5000);
  }
  
}
