import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-surprises',
    standalone: true,
    templateUrl: './surprises.component.html',
    styleUrl: './surprises.component.scss',
    imports: [NavbarComponent, RouterLink]
})
export class SurprisesComponent {

}
