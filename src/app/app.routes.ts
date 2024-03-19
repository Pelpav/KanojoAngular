import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PoemeComponent } from './poeme/poeme.component';
import { SurprisesComponent } from './surprises/surprises.component';
import { AddpoemeComponent } from './addpoeme/addpoeme.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { PoemdescComponent } from './poemdesc/poemdesc.component';
import { ValentineComponent } from './valentine/valentine.component';
import { SortirComponent } from './sortir/sortir.component';
import { FleursComponent } from './fleurs/fleurs.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CalendarComponent } from './calendar/calendar.component';
export const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }, 
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'poemes', component: PoemeComponent},
  { path: 'poem/:id', component: PoemdescComponent },
  { path: 'surprises', component: SurprisesComponent},
  { path: 'addpoeme', component: AddpoemeComponent},
  { path: 'valentine', component: ValentineComponent},
  { path: 'sortir', component: SortirComponent},
  { path: 'fleurs', component: FleursComponent},
  { path: 'countdown', component: CountdownComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: '**', component: Erreur404Component}
];
