import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FicherosService {

  constructor(private http: HttpClient) {}

  obtenerFicheros(ruta: String){
  }

  insertarFichero(formData: FormData){
    // Realiza la solicitud POST al backend.
    this.http.post('URL_del_backend', formData).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        return true;
      },
      (error) => {
        console.error('Error al realizar la solicitud POST', error);
        return false;
      }
    );
    return true;
  }
}
