import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { transform } from 'typescript';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input({ required: true , transform: (valor: number) => Array(valor).fill(0)})
  maximoRating!: number[];

  @Input()
  ratingSeleccionado = 0;

  // maximoRatingArreglo: any[] = [];
  ratingAnterior = 0;


  manejarMouseEnter(indice: number) {
    this.ratingSeleccionado = indice + 1;
  }

  manejarMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  manejarMouseClick(indice: number) {
    this.ratingSeleccionado = indice + 1;
    this.ratingAnterior = this.ratingSeleccionado;
  }

}
