import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-acceuil',
    standalone: true,
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.scss',
    imports: [NavbarComponent]
})
export class AcceuilComponent {  
  
}
