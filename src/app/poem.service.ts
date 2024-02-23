import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  constructor(private http: HttpClient) {}

  getAllPoems(): Observable<Poem[]> {
    return this.http.get<Poem[]>('https://kikipavlova.000webhostapp.com/poems');
  }

}
