import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  

  constructor(private http: HttpClient) {}

  getAllPoems(): Observable<Poem[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<Poem[]>('https://kikipavlova.000webhostapp.com/poems.php', httpOptions);
  }

  getPoemById(id: number, poems: Poem[]): Observable<Poem> {
    // Chercher le poème dans le tableau 'poems'
    const poem = poems.find(poem => poem.id === id);
  
    // Si le poème est trouvé, retourner un Observable du poème
    if (poem) {
      return of(poem);
    }
  
    // Sinon, faire une requête à l'API
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': '',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<Poem>(`https://kikipavlova.000webhostapp.com/poems.php?id=${id}`, httpOptions);
  }
  
}
