import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../services/produto.service';
import { ProdutoCardDetalheComponent } from './../compoentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../compoentes/produto-count.component';
import { Observable, fromEvent } from 'rxjs';
import { Produto } from './../models/produto';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  @ViewChild('test', {static: false}) messagemTela: ElementRef;

  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>
  
  produtos: Produto[];

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit(): void {

    console.log('Clicou no texto!', this.contador.produtos);

    let cliqueTexto:Observable<any> = fromEvent(this.messagemTela.nativeElement, 'click');
    cliqueTexto.subscribe(() => {
      alert('Clicou no texto!');
      return;
    });
  }

  ngOnInit() {
    console.log(this.route.snapshot.data['teste']);
    this.produtos = this.route.snapshot.data['produtos'];
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo
  }

}
