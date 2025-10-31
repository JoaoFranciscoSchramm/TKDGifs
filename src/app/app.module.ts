import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// importa o módulo de rotas
import { AppRoutingModule } from './app.routing.module';
import { FaixaComponent } from './features/faixa/faixa.component';
import { TecnicaCardComponent } from './shared/tecnica-card/tecnica-card.component';
import { VideoModalComponent } from './shared/video-modal/video-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FaixaComponent,
    TecnicaCardComponent,
    VideoModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   // <- aqui é essencial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
