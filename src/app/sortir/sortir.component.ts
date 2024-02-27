import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-sortir',
    standalone: true,
    templateUrl: './sortir.component.html',
    styleUrl: './sortir.component.scss',
    imports: [NavbarComponent, NgIf]
})
export class SortirComponent {
  isButtonClicked: boolean = false;

  constructor(private renderer: Renderer2) {
  }
  @ViewChild('noButton', { static: false })
  noButton!: ElementRef;


  onYesClick() {
    this.isButtonClicked = true;
  }

  onNoMouseOver() {
    // Déplacer le bouton "Non"
    const x = Math.random() * (window.innerWidth - this.noButton.nativeElement.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.noButton.nativeElement.offsetHeight);
    this.renderer.setStyle(this.noButton.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.noButton.nativeElement, 'top', `${y}px`);
  }
}