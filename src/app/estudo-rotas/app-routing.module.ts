import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos.guard';


const appRoutes: Routes = [
    { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
    { path: 'alunos', 
      loadChildren: 'app/estudo-rotas/alunos/alunos.module#AlunosModule',
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard]
     },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: ListaCursosComponent, canActivate: [AuthGuard] },
    { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
    { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
