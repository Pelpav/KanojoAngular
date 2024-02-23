import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { PoemService } from '../poem.service';
import { NgFor, NgIf } from '@angular/common';
import { Poem } from '../poem';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-poeme',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf],
  providers: [HttpClient, PoemService],
  templateUrl: './poeme.component.html',
  styleUrl: './poeme.component.scss'
})
export class PoemeComponent {
  poems: Poem[] = [];
  selectedPoem: Poem | null;

  constructor(private poemService: PoemService) {
    this.selectedPoem = null;
   }

  ngOnInit(): void {
    this.poemService.getAllPoems().subscribe(
      poems => {
        this.poems = poems;
      },
      error => {
        console.error('Erreur lors de la récupération des poèmes : ', error);
      }
    );
  }

  

openPoem(id: number) {
  this.poemService.getPoemById(id).subscribe(poem => {
    this.selectedPoem = poem;
  });
}

closePoem() {
  this.selectedPoem = null;
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