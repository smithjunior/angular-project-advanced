import { ProdutoService } from './../services/produto.service';
import { Produto } from './../models/produto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProdutoResolve implements Resolve<Produto[]> {
  constructor(private produtoService: ProdutoService){}
  resolve(route: ActivatedRouteSnapshot): Produto[] {
    return this.produtoService.obterTodos(route.params.estado);
  }
  
}
