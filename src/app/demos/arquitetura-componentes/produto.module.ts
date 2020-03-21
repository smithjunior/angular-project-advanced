import { ProdutoResolve } from './services/produto.resolve';
import { ProdutoService } from './services/produto.service';
import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoCountComponent } from './compoentes/produto-count.component';
import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProdutoCardDetalheComponent } from './compoentes/produto-card-detalhe.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoService,
    ProdutoResolve
  ],
  exports: []
})
export class ProdutoModule {
  
}
