import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss',
  imports: [NavbarComponent]
})
export class CountdownComponent implements OnInit {
  private comingYear: HTMLElement | null;
  private birthDate = 30;
  private birthMonth = 9;
  nextYear: number;
  private today = new Date();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.comingYear = document.querySelector(".coming-year");
    this.today = new Date('2024-09-07T00:00:00');
    this.nextYear = (this.today.getMonth() + 1 > this.birthMonth || (this.today.getMonth() + 1 === this.birthMonth && this.today.getDate() + 1 > this.birthDate))
      ? new Date().getFullYear() + 1
      : new Date().getFullYear();

    if (this.comingYear) {
      this.comingYear.innerHTML = this.nextYear.toString();
    }

    const countdown = () => {
      const startTime = new Date('2022-09-30T20:17:24').getTime();
      const currentTime = new Date().getTime();
      const endTime = new Date('2024-09-07T00:00:00').getTime();

      const remaining = Math.min(currentTime, endTime) - startTime;

      this.days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
      this.minutes = Math.floor(remaining / (1000 * 60)) % 60;
      this.seconds = Math.floor(remaining / 1000) % 60;
    };

    setInterval(countdown, 1000);
  }
  ngOnInit(): void {
    console.log(this.isBirthdayToday());
  }

  isBirthdayToday(): boolean {
    return this.today.getMonth() + 1 == this.birthMonth && this.today.getDate() == this.birthDate;
  }

}



