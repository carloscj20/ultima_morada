import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Srv1Service {

  url = '/api';
  constructor(private http: HttpClient) { }

  //Obtener datos
  getDatos() {
    return this.http.get(this.url);
  }

  //Obtener un dato:
  getDato(id: string){
    return this.http.get(this.url + '/' + id);
  }

  //Agregar dato
  addDato(dato: any){
    return this.http.post(this.url, dato);
  }

  //Eliminar dato
  deleteDato(id: string){
    return this.http.delete(this.url + '/' + id);
  }

  //Modificar dato
  editDato(id: string, equipo: Dato){
    return this.http.put(this.url + '/' + id, equipo);
  }
}

//Interfaz que valida los datos
export interface Dato{
  id_tipo_piedra?: string;
  nombre_piedra?: string;
}
