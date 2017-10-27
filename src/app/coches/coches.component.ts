import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  coche: {marca: string, modelo: string};

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    if (this.rutaActiva.snapshot.params.marca && this.rutaActiva.snapshot.params.modelo) {
      this.coche = {
        marca: this.rutaActiva.snapshot.params.marca,
        modelo: this.rutaActiva.snapshot.params.modelo
      };
    }
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        console.log('asigno parametros', params);
        if (params.modelo && params.marca) {
          this.coche.modelo = params.modelo;
          this.coche.marca = params.marca;
        }
      }
    );
  }

}
