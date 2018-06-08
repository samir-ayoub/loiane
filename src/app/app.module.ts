import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TelefonesUteisComponent } from './telefones-uteis/telefones-uteis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { EstudoDiretivaComponent } from './estudo-diretiva/estudo-diretiva.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightsDirective } from './shared/highlights.directive';
import { CursosComponent } from './estudo-servicos/cursos/cursos.component';
import { CursosService } from './services/cursos.service';
import { CriarCursoComponent } from './estudo-servicos/criar-curso/criar-curso.component';
import { EstudoPipeComponent } from './pipes/estudo-pipe/estudo-pipe.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelefonesUteisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    EstudoDiretivaComponent,
    DiretivasCustomizadasComponent,
    HighlightsDirective,
    CursosComponent,
    CriarCursoComponent,
    EstudoPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
