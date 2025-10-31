// home.component.ts

import { Component, OnInit } from '@angular/core';
import { ConteudoService } from '../core/services/conteudo.service';
import { Faixa, TextoTeorico } from '../core/models/faixa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faixas: Faixa[] = [];
  textosTeoricos: TextoTeorico[] = [];

  constructor(private conteudoService: ConteudoService, private router: Router) { }

  ngOnInit(): void {
    this.faixas = this.conteudoService.getFaixas();
    this.textosTeoricos = this.conteudoService.getTheoreticalTexts();
  }

  navigateToFaixa(faixaId: string): void {
    this.router.navigate(['/faixa', faixaId]);
  }

  navigateToText(textId: string): void {
    this.router.navigate(['/textos', textId]);
  }
}