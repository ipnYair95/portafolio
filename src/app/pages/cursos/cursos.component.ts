import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  escuelas = [
    {
      nombre: "CECyT #8 Narciso Bassols",
      grado: "Técnico en Computación",
      anio: 2013
    },
    {
      nombre: "Escuela Superior de Cómputo IPN",
      grado: "Ing. Sistemas Computacionales",
      anio: 2019
    },
  ]

  cursos = [
    {
      curso: "CCNA Exploration: Routing Protocols and Concepts",
      fecha: "2012",
      emisor: "../../../assets/iconos/cisco.png"
    },
    {
      curso: "CCNA Exploration: Network Fundamentals",
      fecha: "2012",
      emisor: "../../../assets/iconos/cisco.png",
    },
    {
      curso: "Ingles B2",
      fecha: "2018",
      emisor: "../../../assets/iconos/celex.jpg",
    },
    {
      curso: "Java SE y EE",
      fecha: "2020",
      emisor: "../../../assets/iconos/udemy.jpg",
    },
    {
      curso: "Spring Boot",
      fecha: "2020",
      emisor: "../../../assets/iconos/udemy.jpg"
    },
    {
      curso: "Microservicios con Spring Boot",
      fecha: "2020",
      emisor: "../../../assets/iconos/udemy.jpg"
    },
    {
      curso: "Angular",
      fecha: "2020",
      emisor: "../../../assets/iconos/udemy.jpg"
    },
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
