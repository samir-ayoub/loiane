import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './estudo-rotas/homepage/homepage.component';
import { LoginComponent } from './estudo-rotas/login/login.component';
import { ListaCursosComponent } from './estudo-rotas/lista-cursos/lista-cursos.component';
import { CursoDetalheComponent } from './estudo-rotas/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './estudo-rotas/curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: ListaCursosComponent  },
    { path: 'curso/:id', component: CursoDetalheComponent },
    { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
