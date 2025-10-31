// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaixaComponent } from './features/faixa/faixa.component';
import { TextoTeoricoComponent } from './texto-teorico/texto-teorico.component'; // Importe o novo componente

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faixa/:id', component: FaixaComponent },
  { path: 'textos/:id', component: TextoTeoricoComponent } // Rota para o novo componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }