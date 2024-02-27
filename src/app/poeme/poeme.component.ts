import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { PoemService } from '../poem.service';
import { NgFor, NgIf } from '@angular/common';
import { Poem } from '../poem';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import {
  ActivatedRoute,
  Route,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-poeme',
  standalone: true,
  providers: [HttpClient, PoemService],
  templateUrl: './poeme.component.html',
  styleUrl: './poeme.component.scss',
  imports: [
    HttpClientModule,
    NgFor,
    NgIf,
    RouterModule,
    RouterLink,
    NavbarComponent,
  ],
})
export class PoemeComponent {
  poems: Poem[] = [];
  selectedPoem: Poem | null;
  showPoemList = true;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private poemService: PoemService,
    private http: HttpClient
  ) {
    this.selectedPoem = null;
  }

  getPoemById(id: number): Observable<Poem> {
    // Chercher le poème dans le tableau 'poems'
    const poem = this.poems.find((poem) => poem.id === id);
    console.log(poem);
    

    // Si le poème est trouvé, retourner un Observable du poème
    if (poem) {
      return of(poem);
    }
    return this.http.get<Poem>(
      `https://kikipavlova.000webhostapp.com/poems.php?id=${id}`
    );
  }

  ngOnInit(): void {
    this.poemService.getAllPoems().subscribe(
      (poems) => {
        this.poems = poems.sort((a, b) => a.id - b.id); // Ajoutez cette ligne
      },
      (error) => {
        console.error('Erreur lors de la récupération des poèmes : ', error);
      }
    );
  }
  openPoem(id: number) {
    this.getPoemById(id).subscribe((poem) => {
      this.selectedPoem = poem;      
      this.showPoemList = false; // Ajoutez cette ligne
    });
  }
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  transformContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      content.replace(/\n/g, '<br/>')
    );
  }

  closePoem() {
    this.selectedPoem = null;
    this.showPoemList = true; // Ajoutez cette ligne
  }
}

@Pipe({ name: 'formatLineBreaks' })
export class FormatLineBreaksPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const textWithBreaks = value.replace(/\n/g, '<br/>');
    return this.sanitizer.bypassSecurityTrustHtml(textWithBreaks);
  }
}
