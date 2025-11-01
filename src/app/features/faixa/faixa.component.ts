import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConteudoService } from '../../core/services/conteudo.service';
import { Faixa, FaixaSection, Tecnica } from '../../core/models/faixa.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-faixa',
  templateUrl: './faixa.component.html',
  styleUrls: ['./faixa.component.scss']
})
export class FaixaComponent implements OnInit {
  faixa?: Faixa;
  mode: 'inline' | 'overlay' = 'inline';
  activeType: 'video' | 'text' | null = null;
  activeVideoId?: string;
  activeTextoHtml?: string;
  activeCardId?: string;
  activeNota?: string;
  activeNotaPosition = { top: '0px', left: '0px' };
  isNotaVisible = false;
  hoverTimeout: any;
  activeHoverElement: HTMLElement | null = null;
  sanitizedReferencias?: SafeHtml;
   highlightedReturnCardId: string | null = null;
  // Propriedade para rastrear o estado de expansão das seções
  expandedSections: { [title: string]: boolean } = {};

  constructor(
    private route: ActivatedRoute,
    private conteudo: ConteudoService,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'faixa-branca';
    this.faixa = this.conteudo.getFaixaById(id);
    this.updateMode();
    this.sanitizeReferencias();
window.scrollTo(0, 0)
    if (this.faixa) {
      this.faixa.sections.forEach(section => {
        // Inicializa as seções especiais como ocultas por padrão
        if (section.isSpecialSection) {
          this.expandedSections[section.title] = false;
        }
        window.scrollTo(0, 0)
      });
    }
    window.scrollTo(0, 0)
  }

  sanitizeReferencias(): void {
    if (this.faixa && this.faixa.referencias) {
      const refsHtml = this.faixa.referencias.map(ref => `<p>${ref}</p>`).join('');
      this.sanitizedReferencias = this.sanitizer.bypassSecurityTrustHtml(refsHtml);
    }
  }

  @HostListener('window:resize') onResize() { this.updateMode(); }

  updateMode() {
    this.mode = window.innerWidth <= 768 ? 'overlay' : 'inline';
  }

  openVideo(item: Tecnica) {
    this.activeType = 'video';
    this.activeVideoId = item.videoId;
    this.activeCardId = item.id;
    this.hideNota();
  }

  openText(textoId: string, cardId: string) {
    this.activeType = 'text';
    const texto = this.conteudo.getTextoTeoricoById(textoId);
    this.activeTextoHtml = texto ? texto.conteudo : undefined;
    this.activeCardId = cardId;
    this.hideNota();
  }

  closeModal() {
    this.activeType = null;
    this.activeVideoId = undefined;
    this.activeTextoHtml = undefined;
    this.activeCardId = undefined;
    this.hideNota();
  }

  showNota(item: Tecnica, event: MouseEvent) {
    if (this.mode === 'inline' && item.nota) {
      clearTimeout(this.hoverTimeout);
      this.isNotaVisible = true;
      this.activeNota = item.nota;
      this.activeHoverElement = event.target as HTMLElement;
      const rect = this.activeHoverElement.getBoundingClientRect();
      this.activeNotaPosition = {
        top: `${rect.top + window.scrollY}px`,
        left: `${rect.right + window.scrollX + 10}px`
      };
    }
  }

  onNotaMouseEnter() {
    clearTimeout(this.hoverTimeout);
    this.isNotaVisible = true;
  }

  onNotaMouseLeave() {
    this.startHideTimeout();
  }

  onHoverElementMouseLeave() {
    this.startHideTimeout();
  }

  startHideTimeout() {
    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = setTimeout(() => this.hideNota(), 200);
  }

  hideNota() {
    this.isNotaVisible = false;
    this.activeNota = undefined;
    this.activeHoverElement = null;
  }

  scrollToNote(notaId: number): void {
    setTimeout(() => {
      const element = document.getElementById(`nota-${notaId}`);
      if (element) {
        const textoElement = element.querySelector('.nota-texto');
        const numeroElement = element.querySelector('.nota-numero');
        
        // Remove todos os destaques existentes
        document.querySelectorAll('.highlight-note').forEach(el => el.classList.remove('highlight-note'));
        
        // Adiciona o destaque ao texto e ao número
        if (textoElement) textoElement.classList.add('highlight-note');
        if (numeroElement) numeroElement.classList.add('highlight-note');
        
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove o destaque do TEXTO após 3 segundos
        setTimeout(() => {
          if (textoElement) textoElement.classList.remove('highlight-note');
        }, 2500);

        // Remove o destaque do BOTÃO após 6 segundos (o dobro do tempo)
        setTimeout(() => {
          if (numeroElement) numeroElement.classList.remove('highlight-note');
        }, 5000);
      }
    }, 100);
  }
scrollToTecnicaOrigin(notaId: number): void {
  if (!this.faixa) return;
  
  // Remove destaque anterior de ambos os elementos
  document.querySelectorAll('.tecnica-card.highlight-origin, .card.highlight-origin').forEach(el => {
    el.classList.remove('highlight-origin');
  });
  
  // Encontra a técnica que tem esta notaId
  for (const section of this.faixa.sections) {
    for (const tecnica of section.tecnicas) {
      if (tecnica.notaId === notaId) {
        setTimeout(() => {
          // Tenta encontrar o elemento pelo ID da técnica (pode ser o card ou o tecnica-card)
          const cardElement = document.getElementById(tecnica.id);
          if (cardElement) {
            cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Adicionar classe de destaque - tenta ambos os seletores
            cardElement.classList.add('highlight-origin');
            
            // Se for o elemento pai, também procura o card interno
            const innerCard = cardElement.querySelector('.card');
            if (innerCard) {
              innerCard.classList.add('highlight-origin');
            }
            
            // Remover após 3 segundos
            setTimeout(() => {
              cardElement.classList.remove('highlight-origin');
              if (innerCard) {
                innerCard.classList.remove('highlight-origin');
              }
            }, 3000);
          }
        }, 100);
        return;
      }
    }
  }
}
  // Novo método para alternar a visibilidade da seção
  toggleSection(sectionTitle: string): void {
    this.expandedSections[sectionTitle] = !this.expandedSections[sectionTitle];
  }
}