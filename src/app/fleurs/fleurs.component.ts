import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-fleurs',
    standalone: true,
    templateUrl: './fleurs.component.html',
    styleUrl: './fleurs.component.scss',
    imports: [NavbarComponent]
})
export class FleursComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Simulez un délai de 1 seconde
    setTimeout(() => {
      // Supprimez la classe "not-loaded" de la div
      const myDiv = this.el.nativeElement.querySelector('#myDiv');
      myDiv.classList.remove('not-loaded');
    }, 1000);
  }
}
