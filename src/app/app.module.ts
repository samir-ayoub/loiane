import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

// locale settings
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HomepageComponent } from './estudo-rotas/homepage/homepage.component';
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
import { LocaleSettingsService } from './pipes/locale-settings.service';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';
import { LoginComponent } from './estudo-rotas/login/login.component';
// import { routing } from './app.routing';
import { ListaCursosComponent } from './estudo-rotas/lista-cursos/lista-cursos.component';
import { CursoDetalheComponent } from './estudo-rotas/curso-detalhe/curso-detalhe.component';
import { ListaCursosService } from './estudo-rotas/lista-cursos/listaCursos.service';
import { CursoNaoEncontradoComponent } from './estudo-rotas/curso-nao-encontrado/curso-nao-encontrado.component';
import { AppRoutingModule } from './estudo-rotas/app-routing.module';
import { AlunosModule } from './estudo-rotas/alunos/alunos.module';

// locale settings
registerLocaleData(localePt);

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
    CamelCasePipe,
    FiltroArrayImpuroPipe,
    LoginComponent,
    HomepageComponent,
    ListaCursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlunosModule,
    AppRoutingModule,
  ],
  providers: [
    CursosService,
    ListaCursosService,
// locale settings
    LocaleSettingsService,
    {
      provide: LOCALE_ID,
      deps: [LocaleSettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
