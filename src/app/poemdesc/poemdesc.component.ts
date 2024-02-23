import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoemService } from '../poem.service';
import { PoemeComponent } from '../poeme/poeme.component';
import { Poem } from '../poem';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { log } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poemdesc',
  standalone: true,
  imports: [PoemeComponent, NgIf, HttpClientModule, CommonModule, NgFor],
  providers: [HttpClient, PoemService, PoemeComponent],
  templateUrl: './poemdesc.component.html',
  styleUrl: './poemdesc.component.scss'
})
export class PoemdescComponent implements OnInit {
  selectedPoem: Observable<Poem> | null;
  constructor(private route: ActivatedRoute, private poemService: PoemService, public poemComponent: PoemeComponent) {
    this.selectedPoem = null;
   }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.selectedPoem = this.poemComponent.getPoemById(+id);
  } else {
    console.error('ID du poème non fourni');
  }
}
  
}
