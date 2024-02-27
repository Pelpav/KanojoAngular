import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.scss']
})

export class ValentineComponent implements AfterViewInit {
  
  
  noClickCount = 0;
  buttonHeight = 48; // Starting height in pixels
  buttonWidth = 80;
  fontSize = 20; // Starting font size in pixels
  imagePaths = [
    "assets/images/image1.gif",
    "assets/images/image2.gif",
    "assets/images/image3.gif",
    "assets/images/image4.gif",
    "assets/images/image5.gif",
    "assets/images/image6.gif",
    "assets/images/image7.gif"
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const yesButton = this.el.nativeElement.querySelector('#yesButton');
    const noButton = this.el.nativeElement.querySelector('#noButton');
    const imageDisplay = this.el.nativeElement.querySelector('#imageDisplay');
    const valentineQuestion = this.el.nativeElement.querySelector('#valentineQuestion');
    const responseButtons = this.el.nativeElement.querySelector('#responseButtons');

    this.renderer.listen(noButton, 'click', () => {
      if (this.noClickCount < 5) {
        this.noClickCount++;
        this.renderer.setProperty(imageDisplay, 'src', this.imagePaths[this.noClickCount]);
        this.buttonHeight += 15; // Increase height by 5px on each click
        this.buttonWidth += 15;
        this.fontSize += 10; // Increase font size by 1px on each click
        this.renderer.setStyle(yesButton, 'height', `${this.buttonHeight}px`); // Update button height
        this.renderer.setStyle(yesButton, 'width', `${this.buttonWidth}px`);
        this.renderer.setStyle(yesButton, 'fontSize', `${this.fontSize}px`); // Update font size
        if (this.noClickCount < 6) {
          this.renderer.setProperty(noButton, 'textContent', ["Non", "Tu es sure ?", "Steuplait", "Ne me fais pas ça :(", "Tu brises mon coeur", "Je vais pleurer..."][this.noClickCount]);
        }
      }
    });

    this.renderer.listen(yesButton, 'click', () => {
      this.renderer.setProperty(imageDisplay, 'src', 'assets/images/image7.gif'); // Change to image7.gif
      this.renderer.setProperty(valentineQuestion, 'textContent', "YESSSSS !! :3"); // Change the question text
      this.renderer.setStyle(responseButtons, 'display', 'none'); // Hide both buttons
      // confetti(); 
      confetti.default({ particleCount: 100, spread: 70, startVelocity: 20 });
    });
  }
}