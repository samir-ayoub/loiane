import { Component, OnInit } from '@angular/core';
import { AuthService } from './estudo-rotas/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  idCurso;

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
