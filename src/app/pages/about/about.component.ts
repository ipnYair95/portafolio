import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  datos = {
    edad: this.getEdad( '08/06/1995' ),
    domicilio: 'Ixtapaluca, Estado de México'
  }

  constructor() { }

  ngOnInit(): void {
  }

  getEdad( nacimiento: String ){

    let dia  : string = nacimiento.substr(0,2);
    let mes : string  = nacimiento.substr(3,2);
    let anio  : string = nacimiento.substr(6);

    let age;

    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();
    age = today_year - +anio;

    if ( today_month < (+mes - 1))
    {
        age--;
    }
    if (((+mes - 1) == today_month) && (today_day < +dia))
    {
        age--;
    }
    return age;

  }

}

