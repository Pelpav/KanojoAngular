import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-surprises',
    standalone: true,
    templateUrl: './surprises.component.html',
    styleUrl: './surprises.component.scss',
    imports: [NavbarComponent]
})
export class SurprisesComponent {

}
