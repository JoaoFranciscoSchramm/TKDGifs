import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

// Modo de exibição: 'inline' (desktop/sticky) ou 'overlay' (mobile fullscreen)
export type ModalMode = 'inline' | 'overlay';
type ContentType = 'video' | 'text';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnChanges {
  @Input() open = false;
  @Input() mode: ModalMode = 'inline';
  @Input() type: ContentType = 'video';
  @Input() videoId?: string;
  @Input() htmlText?: string;
  @Input() noteText?: string; // NOVO: propriedade para o texto da nota
 @Input() htmlContent?: string; 
  @Output() close = new EventEmitter<void>();

  safeVideoUrl?: SafeResourceUrl;
  safeHtml?: SafeHtml;
  safeNoteHtml?: SafeHtml; // NOVO: propriedade para o HTML sanitizado da nota

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    if (this.type === 'video' && this.videoId) {
      const url = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&mute=1`;
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else if (this.type === 'text' && this.htmlText) {
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlText);
    }

    // NOVO: Sanitiza o HTML da nota se ele existir
    if (this.noteText) {
      this.safeNoteHtml = this.sanitizer.bypassSecurityTrustHtml(this.noteText);
    } else {
      this.safeNoteHtml = undefined;
    }
    
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.open) this.onClose();
  }

  onBackdropClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay-backdrop')) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}