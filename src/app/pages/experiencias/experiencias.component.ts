import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experiencias = [
    {
      lugar: "CECyT #8 Narciso Bassols",
      puesto: "Auxiliar de dirección",
      tipo: "Servicio Social Media Superior",
      fecha: "2012",
      exp: `
      Ante las actividades de archivar y entregar documentos, observé como se constituye la organización interna de una 
      institución algo que no pensaba que fuera tanto.
      `
    },
    {
      lugar: "15EPR4054C Albert Einstein",
      puesto: "Auxiliar de dirección y laboratorio",
      tipo: "Servicio Social Licenciatura",
      fecha: "2018",
      exp: `
      Tenía actividades no definidas a veces ayudaba en dirección y otras veces en laboratorio ya sea apoyando en clases 
      o arreglando equipos, sin embargo tuve el gusto de comprender de que la organización de una institución tiene su 
      complejidad además, por otra parte me ayudó la interacción con los niños, maestros o padres de familia en la resolución de 
      problemas para comunicarme con otras personas y negociar.
      `
    },
    {
      lugar: "Escuela Superior de Cómputo",
      puesto: "Tesis de licenciatura",
      tipo: "Modelado de un organismo",
      fecha: "2018",
      exp: `
      Tuve tropiezos que me ayudaron a pensar en todas las posibilidades que pueden abordar un problema o una acción, a pesar de ello
      pude sacar adelante dicho modelado que después se volvería en un gran momento de mi vida.
      `
    },
    {
      lugar: "Universidad de Guadalajara - AUTOMATA 2019",
      puesto: "Ponente de proyecto",
      tipo: "-",
      fecha: "2019",
      exp: `
        Presenté la tesis por medio de una selección de artículos ante una convención de "autómatas celulares" el cual fue el paradigma
        para realizar el modelo del organismo; acompañado de personas valiosas fue mi primer experiencia no solo en realizar dicha
        ponencia sino también conocer gente de otros países, conversar y aprender un poco con ellos.
      `
    },
    {
      lugar: "15EPR4054C Albert Einstein",
      puesto: "Administrativo",
      tipo: "Empleo",
      fecha: "2019",
      exp: `
        Diseñé e implemente diversas estrategias para resolver problemas, entregar información o mantener la organización de la institución,
        especialmente en el tiempo de pandemia, en concreto era importante optimizar actividades de tal manera de que la información requerida
        estuviera a la mano o actualizada.
      `
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
