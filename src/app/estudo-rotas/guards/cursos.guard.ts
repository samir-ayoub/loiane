import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

//   nesse metodo voce pode definir permissões para o usuário, geralmente é injetado um serviço 
//   que bate no server e valida se o usuário tem acesso a determinada área do site
  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    } 

    this.router.navigate(['/login']);

    return false;
    

  }

}


