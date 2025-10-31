// texto-teorico.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConteudoService } from '../core/services/conteudo.service';
import { TextoTeorico } from '../core/models/faixa.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-texto-teorico',
  template: `
    <div class="introducao">
      <h1>{{ textoTeorico?.titulo }}</h1>
    </div>
    <div class="conteudo-faixa">
      <div class="conteudo-principal">
        <div class="conteudo-texto">
          <div [innerHTML]="sanitizedConteudo"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./texto-teorico.component.scss']
})
export class TextoTeoricoComponent implements OnInit {
  textoTeorico?: TextoTeorico;
  sanitizedConteudo?: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private conteudoService: ConteudoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.textoTeorico = this.conteudoService.getTextoTeoricoById(id);
        if (this.textoTeorico) {
          this.sanitizedConteudo = this.sanitizer.bypassSecurityTrustHtml(this.textoTeorico.conteudo);
        }
      }
    });
  }
}