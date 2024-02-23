import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }, 
  { path: 'acceuil', component: AcceuilComponent },
];
