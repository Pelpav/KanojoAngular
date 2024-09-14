import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Poem } from './poem';

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  private poems: Poem[] = [];

  constructor(private http: HttpClient) {}

  getAllPoems(): Observable<Poem[]> {
    if (this.poems.length > 0) {
      return of(this.poems);
    }

    return this.http.get<Poem[]>('assets/poems.json').pipe(
      map(poemsData => {
        this.poems = poemsData.map(poem => ({
          id: poem.id,
          title: poem.title,
          content: poem.content,
          created_at: poem.created_at
        }));
        return this.poems;
      })
    );
  }

  getPoemById(id: number): Observable<Poem | undefined> {
    return this.getAllPoems().pipe(
      map(poems => poems.find(poem => poem.id === id))
    );
  }
}
