import { Injectable, Output, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  @Output() mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
        this.usuarioAutenticado = false;

        this.mostrarMenuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
