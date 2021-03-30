import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../../services/service.service';

declare let Email: any

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {

    this.forma = this.fb.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(30)]]
    });

  }

  ngOnInit(): void {
  }

  click() {

    if (this.forma.valid) {

      let mensaje = new Mensaje();
      mensaje = this.forma.value;

      this.service.enviarMensaje(mensaje).subscribe(resp => {

        if (resp !== false) {
          Swal.fire({
            title: 'Exito',
            text: 'Mensaje enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.reset();
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: 'Ha ocurrido un error, por favor revisar sus datos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }

      });



      return;


    }

    Swal.fire({
      title: 'Error!',
      text: 'Datos no válidos',
      icon: 'error',
      confirmButtonText: 'Ok'
    })

  }

  reset() {
    this.forma.reset({
      correo: '',
      asunto: '',
      mensaje: ''
    });
  }

}

export class Mensaje {
  correo: string;
  asunto: string;
  mensaje: string;

}
