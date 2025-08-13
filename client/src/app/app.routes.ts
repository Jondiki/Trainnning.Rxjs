import { Acceuil } from './components/acceuil/acceuil';
import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page'
import { Menu } from './components/menu/menu';
import { Header } from './components/header/header';
export const routes: Routes = [
    {path :'', component: LandingPage},
    {path :'acceuil', component: Acceuil},
  { path: 'menu', component: Menu }
];
