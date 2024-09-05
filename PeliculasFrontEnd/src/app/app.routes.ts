import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cine/indice-cines/indice-cines.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'generos', component: IndiceGenerosComponent},
  {path: 'generos/crear', component: CrearGenerosComponent},

  {path: 'actores', component: IndiceActoresComponent},
  {path: 'actores/crear', component: CrearActorComponent},
  {path: 'cines', component: IndiceCinesComponent},
  {path: 'cines/crear', component: CrearCineComponent},
  {path: 'peliculas/crear', component: CrearPeliculaComponent}
];
