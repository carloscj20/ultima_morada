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
  editDato(id: string, dato1: Dato){
    const url = `${this.url}/${id}`;
    const body = dato1;

    console.log(dato1.nombre_piedra)
    console.log(body)

    //id retorna numero, dato1.nombre_piedra retorna el nombre de la nueva piedra
    return this.http.put(url, dato1);
  }
}

//Interfaz que valida los datos
//Quité el :? de los datos de abajo para probar algunas cosas (y parece que esta funcionando :D)
export interface Dato {
  id_tipo_piedra: string;
  nombre_piedra: string;
}
