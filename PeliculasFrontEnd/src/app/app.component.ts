import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PeliculasFrontEnd';

  peliculas = [
    {
      titulo: "SpiderMan",
    fechaLanzamiento: new Date(),
    precio: 70
    },
    {
      titulo: "SpiderMan 2",
    fechaLanzamiento: new Date("2024-08-25"),
    precio: 75
    },
    {
      titulo: "SpiderMan 3",
    fechaLanzamiento: new Date("2024-08-26"),
    precio: 75
    }
  ];
}
