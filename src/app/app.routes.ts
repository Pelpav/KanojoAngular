import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PoemeComponent } from './poeme/poeme.component';
import { SurprisesComponent } from './surprises/surprises.component';
import { AddpoemeComponent } from './addpoeme/addpoeme.component';

export const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }, 
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'poemes', component: PoemeComponent},
  { path: 'surprises', component: SurprisesComponent},
  { path: 'addpoeme', component: AddpoemeComponent}
];
