import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  title = "Yair Marin - Desarrollador Web Jr.       "
  comer = false;



  constructor() {

    let index = this.title.length;
    let limite = this.title.length;
    let fijo = this.title;

    setInterval(() => {

      if (this.comer) {

        if (index == 1) {
          this.comer = false;          
        } else {
          this.title = this.title.substring(0, --index);
        }

      } else {

        if (index == limite) {
          this.comer = true;          
        } else {
          this.title = fijo.substring(0, ++index);
        }

      }


    }, 100);



  } 

}
