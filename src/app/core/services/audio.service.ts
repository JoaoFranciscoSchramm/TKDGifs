import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'; // NOVO: Importe Subject e Observable

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private currentAudio: string | null = null;

private audioStateChangeSubject = new Subject<void>(); 
  public audioStateChange$: Observable<void> = this.audioStateChangeSubject.asObservable(); // Observable público




  constructor() {
    this.audio = new Audio();
 // 2. Listener para o evento 'ended' (áudio terminou naturalmente)
    this.audio.addEventListener('ended', () => {
      this.currentAudio = null; // Reinicia o estado do áudio
      this.audioStateChangeSubject.next(); // Notifica o fim
    });
  }
  playAudio(audioFile: string): void {
    // Se já está tocando o mesmo áudio, para
    if (this.currentAudio === audioFile && !this.audio.paused) {
      this.stopAudio();
      return;
    }

    // Se é um áudio diferente, para o atual e toca o novo
    if (this.currentAudio !== audioFile) {
      this.stopAudio();
      this.currentAudio = audioFile;
      this.audio.src = audioFile;
      this.audio.load();
    }

    this.audio.play().catch(error => {
      console.error('Erro ao reproduzir áudio:', error);
    });
  }

  stopAudio(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  isPlaying(audioFile: string): boolean {
    return this.currentAudio === audioFile && !this.audio.paused;
  }
}