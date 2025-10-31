import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
  OnDestroy, 
  ChangeDetectorRef 
} from '@angular/core';
import { Tecnica } from '../../core/models/faixa.model';
import { AudioService } from '../../core/services/audio.service'; 
import { Subscription } from 'rxjs'; // Necessário para gerenciar a inscrição

@Component({
  selector: 'app-tecnica-card',
  templateUrl: './tecnica-card.component.html',
  styleUrls: ['./tecnica-card.component.scss']
})
export class TecnicaCardComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() tecnica!: Tecnica;
  @Input() active = false;
  @Output() openVideo = new EventEmitter<Tecnica>();
  @Output() openText = new EventEmitter<string>();
  @Output() onNotaClick = new EventEmitter<number>(); 

  isButtonHovered = false;
  private audioSubscription: Subscription | undefined; 

  constructor(
    private audioService: AudioService, 
    private cdr: ChangeDetectorRef // Injeção do ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // 1. Assina o Observable do serviço de áudio
    this.audioSubscription = this.audioService.audioStateChange$.subscribe(() => {
      // 2. Quando o áudio para (seja por 'ended' ou 'stopAudio'), força a verificação de mudanças.
      // Isso garante que o Angular reavalie a propriedade [class.playing]="isAudioPlaying()"
      // no HTML, removendo o realce verde.
      if (this.tecnica.audioFile) {
          this.cdr.detectChanges(); 
      }
    });
  }

  ngOnDestroy(): void {
    // 3. Cancela a inscrição para evitar memory leaks quando o componente for destruído
    if (this.audioSubscription) {
      this.audioSubscription.unsubscribe();
    }
  }

  onClick() {
    if (this.tecnica.videoId) {
      this.openVideo.emit(this.tecnica);
    } else if (this.tecnica.textoId) {
      this.openText.emit(this.tecnica.textoId);
    }
  }

  onNotaButtonClick(event: Event) {
    event.stopPropagation();
    if (this.tecnica.notaId !== undefined && this.tecnica.notaId !== null) {
      this.onNotaClick.emit(this.tecnica.notaId);
    }
  }

  onAudioButtonClick(event: Event): void {
    event.stopPropagation();
    if (this.tecnica.audioFile) {
      this.audioService.playAudio(this.tecnica.audioFile);
    }
  }
  
  isAudioPlaying(): boolean {
    if (!this.tecnica.audioFile) {
      return false;
    }
    // O status do botão é baseado no AudioService
    return this.audioService.isPlaying(this.tecnica.audioFile);
  }
}