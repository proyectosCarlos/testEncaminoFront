import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ruta } from '../interfaces/ruta';
import { Opinion } from '../interfaces/opinion';



@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  readonly API_ENDPOINT = 'https://salty-sands-24384.herokuapp.com/api'

  rutas: Ruta[]
  rutaSeleccionada: Ruta = new Ruta
 

  

  constructor(public http: HttpClient) { }

  obtenerRutas(): Observable<Ruta[]>{    
    return this.http.get<Ruta[]>(this.API_ENDPOINT + '/rutas')
   .pipe(catchError(this.manejoError))
  }
  manejoError(error: HttpErrorResponse){
  return throwError(error.message || "Error servidor")
  }

  guardarOpinion(opinion: Opinion){
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post(this.API_ENDPOINT + '/rutas' , opinion, {headers: headers})  

  }
}
