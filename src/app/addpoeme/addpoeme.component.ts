import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Poem } from '../poem';


@Component({
    selector: 'app-addpoeme',
    standalone: true,
    templateUrl: './addpoeme.component.html',
    styleUrl: './addpoeme.component.scss',
    imports: [NavbarComponent, ReactiveFormsModule, HttpClientModule], 
    providers: [HttpClient, FormBuilder]
})
export class AddpoemeComponent{
    poemeForm!: FormGroup;
    constructor (private http: HttpClient, private fb: FormBuilder){
        this.poemeForm = new FormGroup({
            title: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required),
        })
    }
    
    ajouterPoeme(poem: Poem) {
        const endpoint = 'https://kikipavlova.000webhostapp.com/poems.php'; // Remplacez par l'URL de votre endpoint
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': '',
              'Access-Control-Allow-Origin': '*'
            })
          };
    
        const body = {"id": poem.id, "title": poem.title, "content": poem.content, "created_at": poem.created_at };
    
        this.http.post(endpoint, body, httpOptions).subscribe(
          response => {
            console.log('Poème ajouté avec succès :', response);
            // Faites ce que vous voulez après l'ajout réussi
          },
          error => {
            console.error('Erreur lors de l\'ajout du poème :', error);
            // Gérez l'erreur en conséquence
          }
        );
    }
    

    onSubmit() {
        const data = this.poemeForm.getRawValue();
    
        console.log(data);
        
        if (this.poemeForm.valid) {
            const titleControl = this.poemeForm.get('title');
            const contentControl = this.poemeForm.get('content');
            
            if (titleControl && contentControl) {
                const poem: Poem = {
                    title: titleControl.value,
                    content: contentControl.value,
                    id: 0,
                    created_at: null,
                };
                this.ajouterPoeme(poem);
            }
        } else {
            console.error('Le formulaire est invalide.');
        }
    }
    
    
}
