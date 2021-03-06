import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mensaje } from '../pages/contacto/contacto.component';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "https://formspree.io/f/xleoqlra";

  constructor( private http: HttpClient ) { }

  public enviarMensaje( mensaje: Mensaje ) : Observable<any> {

    return this.http.post( this.url, mensaje ).pipe(
      map(resp => {
        //console.log(resp);
        return resp;
      }),
      catchError(err => {
        //console.log(err);
        return of(false)
      })

    );

  }

}
