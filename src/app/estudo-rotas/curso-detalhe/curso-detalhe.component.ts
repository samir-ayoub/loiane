import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  inscricao: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
