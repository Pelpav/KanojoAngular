import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Poem } from '../poem';
import { Router } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
    selector: 'app-addpoeme',
    standalone: true,
    templateUrl: './addpoeme.component.html',
    styleUrl: './addpoeme.component.scss',
    imports: [NavbarComponent, ReactiveFormsModule, HttpClientModule], 
    providers: [HttpClient, FormBuilder, RouterLink, RouterModule]
})
export class AddpoemeComponent{
    poemeForm!: FormGroup;
    constructor (private http: HttpClient, private fb: FormBuilder, private router: Router){
        this.poemeForm = new FormGroup({
            title: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required),
        })
    }
    
    ajouterPoeme(title: string, content: string) {
        const endpoint = 'https://kikipavlova.000webhostapp.com/poems.php'; // Remplacez par l'URL de votre endpoint

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');


        const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
    
        this.http.post(endpoint, formData, {headers: headers, responseType: 'json',}).subscribe(
          response => {
            console.log('Poème ajouté avec succès :', response);
            window.alert('Poème ajouté avec succès !');
            this.router.navigate(['/poemes']); // Rediriger
            // Envoyer une requête POST à l'URL du build hook de Netlify
            this.http.post("https://api.netlify.com/build_hooks/65ddbeec16ee3db6a4aead8e", {}).subscribe(
        response => {
          console.log('Déploiement du serveur déclenché avec succès :', response);
        },
        error => {
          console.error('Erreur lors du déclenchement du déploiement du serveur :', error);
        }
      );
          },
          error => {
            console.error('Erreur lors de l\'ajout du poème :', error);
            window.alert('Erreur lors de l\'ajout du poème.');
          }
        );
    }
    deploy(){
        console.log("Déploiement");
        
    }

    onSubmit() {
        
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
                this.ajouterPoeme(poem.title, poem.content);
            }
        } else {
            console.error('Le formulaire est invalide.');
        }
    }
    
    
}
