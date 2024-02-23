import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { PoemService } from '../poem.service';
import { NgFor } from '@angular/common';
import { Poem } from '../poem';

@Component({
  selector: 'app-poeme',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './poeme.component.html',
  styleUrl: './poeme.component.scss'
})
export class PoemeComponent {
  poems: Poem[] = [];

  constructor(private poemService: PoemService) { }

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
}
