import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  coche: {marca: string, modelo: string};

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.coche = {
      marca: this.rutaActiva.snapshot.params.marca,
      modelo: this.rutaActiva.snapshot.params.modelo
    };
  }

}
