import { Component, OnInit } from '@angular/core';
import { Srv1Service, Dato } from '../../Servicios/srv1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListarDato: Dato[] | undefined;

  constructor(private Srv1Service:Srv1Service) { }

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos() {
    this.Srv1Service.getDatos().subscribe(
      res => {
        console.log(res)
        this.ListarDato = <any> res;
      },
      err => console.log(err)
    )
  }
}
