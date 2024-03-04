import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-acceuil',
    standalone: true,
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.scss',
    imports: [NavbarComponent]
})
export class AcceuilComponent {
    playVideos() {
        const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;
        const btnPlayer = document.getElementById('pbutton') as HTMLDivElement;
        const videoSources = ['../../assets/videos/vid1.mp4', '../../assets/videos/vid2.mp4', '../../assets/videos/vid3.mp4']; // Remplace avec tes noms de fichiers vidéo

        let currentVideoIndex = 0;

        btnPlayer.style.display = 'none';
        videoPlayer.src = videoSources[currentVideoIndex];
        videoPlayer.style.display = 'block';

        videoPlayer.addEventListener('ended', () => {
            currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
        });

        videoPlayer.load();
        videoPlayer.play();
    }
}

