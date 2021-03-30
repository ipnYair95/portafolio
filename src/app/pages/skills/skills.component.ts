import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsDev: Skills[] = [

    {
      nombre: 'HTML',
      nivel: 80,
      herramientas: ' Estructura Web, títulos, elementos libres u ordenados, tablas, formularios y enlaces.'
    },
    {
      nombre: 'CSS',
      nivel: 50,
      herramientas: ' Maquetación básica, flexbox, especificidad, responsive design'
    },
    {
      nombre: 'JAVASCRIPT',
      nivel: 50,
      herramientas: 'Operadores, estructura, ECMA 6, Local & Session storage '
    },
    {
      nombre: 'ANGULAR',
      nivel: 70,
      herramientas: ' Lazy loading, pipes, protección de rutas, consumo de API´s, modularización, formularios reactivos'
    }
  ]

  skillsBack: Skills[] = [

    {
      nombre: 'JAVA',
      nivel: 60,
      herramientas: ' Conceptos de POO (herencia, polimorfismo, encapsulamiento, interfaces), paquetes, maven, JSP, JSF, Java EE '
    },
    {
      nombre: 'SPRING BOOT',
      nivel: 60,
      herramientas: ` Creación de endpoints, empleo de DAO´s y DTO´s, entidades con relaciones, generación de JWT,
      uso de DB relacionales y no relaciones, validaciones, envío de códigos de error `,
    },
    {
      nombre: 'BASES DE DATOS',
      nivel: 30,
      herramientas: ` Conocimiento básico de relaciones y gestores como Mongo, MySql, MariaDb, Postgresql `,
    },
    {
      nombre: 'REPORTES',
      nivel: 40,
      herramientas: ` Generación de reportes y subreportes empleando JasperReports  `,
    },
    {
      nombre: 'MICROSERVICIOS',
      nivel: 50,
      herramientas: ` Comunicación entre microservicios, despliegue de varias instancias, uso de puerta de enlace `,
    }
  ]
 

  skillsTools: Skills[] = [

    {
      nombre: 'POSTMAN',
      nivel: 70,
      herramientas: ' Apoyo para probar end-points '
    },
    {
      nombre: 'GIT',
      nivel: 30,
      herramientas: ` Control de versiones básico, conexión con repositorios remotos (GIT HUB), ver información de commits o estados
      actuales, creación de ramas o branch, clonar repositorios `
    },
    {
      nombre: 'DESPLIEGUES',
      nivel: 20,
      herramientas: ` Empleo de alojamientos gratuitos como heroku o netlifly y empleo básico de contenedores Docker`
    }
  ]

  skillOther: Skills[] = [

    {
      nombre: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO',
      nivel: 80,
      herramientas: ` Mantenimiento de hardware y software, desfragmentación de equipos, mejora de rendimiento,
      conocimientos básicos de seguridad informática `
    },
    {
      nombre: 'PAQUETERIA DE OFFICE',
      nivel: 70,
      herramientas: ` Uso administrativo de Word, Excel y PowerPoint `
    },
    {
      nombre: 'REDES',
      nivel: 50,
      herramientas: ` Conocimientos de conceptos: VPN, WLAN, protocolos TCP Y UDP, Topologías, Modelo OSI,
      configuración de routers y otros equipos de red, DNS, DHCP, FIREWALL `
    }, 
    {
      nombre: 'DANZA',
      nivel: 50,
      herramientas: ` Conocimientos de básicos de ballet y jazz, ritmos urbanos y latinos `
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

export class Skills {

  nombre: string;
  nivel: number;
  herramientas: string;

}
