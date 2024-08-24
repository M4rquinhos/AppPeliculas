import { CurrencyPipe, DatePipe, NgFor, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PeliculasFrontEnd';

  peliculas = [
    {
      titulo: "SpiderMan",
      fechaLanzamiento: new Date(),
      precio: 70,
      poster: "https://imgs.search.brave.com/1CEfmrK3eEF20mHsojwZHSv7M44UnGsajQqGoqxoAiQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjEtcm96eWVRUUwu/anBn"
    },
    {
      titulo: "SpiderMan 2",
      fechaLanzamiento: new Date("2024-08-25"),
      precio: 75,
      poster: "https://imgs.search.brave.com/OzdjuKlAI8EtvKiAxzu0mX7vKd0BsyDT7mq58wHgrP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFtQUQza0ZsY0wu/anBn"
    },
    {
      titulo: "SpiderMan 3",
      fechaLanzamiento: new Date("2024-08-26"),
      precio: 75,
      poster: "https://imgs.search.brave.com/rxdWpdY0aQIJLI7-dlTZNgdRyBmbZrwp3miZ0BIzTj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxN2VLNVYrVDVM/LmpwZw"
    },
    {
      titulo: "Harry Potter y la piedra filosofal",
      fechaLanzamiento: new Date("2001-11-16"),
      precio: 75,
      poster: "https://imgs.search.brave.com/rl4GCEEb9B6I_1gNloqq581cbhxboSONIBPkdPf1Zb8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRTW9IN21TTEwu/anBn"
    },
    {
      titulo: "Harry Potter y la cámara secreta",
      fechaLanzamiento: new Date("2002-11-15"),
      precio: 75,
      poster: "https://imgs.search.brave.com/GL8tk_I6cOOEKRXjvj9_4yb9QjU05JTcxUvdSWeEQ7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFLLXhhaUl5R0wu/anBn"
    },
    {
      titulo: "Harry Potter y el prisionero de Azkaban",
      fechaLanzamiento: new Date("2004-06-04"),
      precio: 75,
      poster: "https://imgs.search.brave.com/1FJpVkhdYuUOfQPyOQl_kne7yHZ-TMdMa8MOKQP9mrs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5oYXJyeXBvdHRl/cmZhbnpvbmUuY29t/L3ByaXNvbmVyLW9m/LWF6a2FiYW4tdGhl/YXRyaWNhbC1wb3N0/ZXIuanBn"
    },
    {
      titulo: "Harry Potter y el cáliz de fuego",
      fechaLanzamiento: new Date("2005-11-18"),
      precio: 75,
      poster: "https://imgs.search.brave.com/bjCVbRNHYJNiGhyVAdCAF_nmEKMNSF9zBXrhVkhPReU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFvcGRjVUNHakwu/anBn"
    },
    {
      titulo: "Harry Potter y la Orden del Fénix",
      fechaLanzamiento: new Date("2007-07-11"),
      precio: 75,
      poster: "https://imgs.search.brave.com/9WOK_lB52HgRiIZkDIT5Ya9eyWrO5TTNtaFwb-mazqw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3NsYXRpbm8uY29t/L2tleWFydC1qcGVn/L21vdmllcy9tZWRp/YS9icm93c2VyL2hw/NV92X2RkX2thX3R0/XzIwMDB4MzAwMF8z/MDBkcGlfbXhfM2Zm/ZWM2YjcuanBlZw"
    },
    {
      titulo: "Harry Potter y el misterio del príncipe",
      fechaLanzamiento: new Date("2009-07-15"),
      precio: 75,
      poster: "https://imgs.search.brave.com/5fkdim9wmphd5sXlSZe_NepO5MCe8r1uoXEjNUulESo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWNhcnRlbGVyYS5j/b20vY2FydGVsZXMv/MTkwMC8xOTk2LzAx/MV9wLmpwZw"
    },
    {
      titulo: "Harry Potter y las reliquias de la Muerte - Parte 1",
      fechaLanzamiento: new Date("2010-11-19"),
      precio: 75,
      poster: "https://imgs.search.brave.com/eibm0zNhd4Lcg8aqRruhlvZVPlQOleSuySNwDQ1cs2M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmLzRh/LzdhLzhmNGE3YTY4/MDNlM2Q4MjIyYWQx/ZTFiMDg2MDVhOWQ0/LmpwZw"
    },
    {
      titulo: "Harry Potter y las reliquias de la Muerte - Parte 2",
      fechaLanzamiento: new Date("2011-07-15"),
      precio: 75,
      poster: "https://imgs.search.brave.com/ijba760iEs9qEus2YYPkTUeDgMajwXMDgdNosyzDmR8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3NsYXRpbm8uY29t/L2tleWFydC1qcGVn/L21vdmllcy9tZWRp/YS9icm93c2VyL2hw/N2Jfdl9kZF9rYV90/dF8yMDAweDMwMDBf/MzAwZHBpX214Xzg3/YzIyNjI3LmpwZWc"
    }
  ];
}
