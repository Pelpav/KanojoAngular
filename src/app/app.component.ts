import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [Router],
    imports: [RouterOutlet, NavbarComponent, HttpClientModule]
})
export class AppComponent {
  title = 'Kanojo';
  lastUrl: string | undefined;

  constructor(private router: Router) {
    // Écouter les événements de fin de navigation
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            // Si l'URL a changé, recharger la page
            if (this.lastUrl && this.lastUrl !== event.url) {
                location.reload();
            }
            // Mettre à jour l'URL précédente
            this.lastUrl = event.url;
        }
    });
  }
}
