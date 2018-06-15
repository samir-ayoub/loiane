import { CursosComponent } from './estudo-rotas/cursos/cursos.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './estudo-rotas/homepage/homepage.component';
import { LoginComponent } from './estudo-rotas/login/login.component';
import { ListaCursosComponent } from './estudo-rotas/lista-cursos/lista-cursos.component';
import { CursoDetalheComponent } from './estudo-rotas/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: ListaCursosComponent  },
    { path: 'curso/:id', component: CursoDetalheComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
