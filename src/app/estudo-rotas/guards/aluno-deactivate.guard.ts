import { Injectable } from '@angular/core';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {


  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log(`guarda de desativacao`);
    return component.podeMudarRota ? component.podeMudarRota() : true;
  }
}
