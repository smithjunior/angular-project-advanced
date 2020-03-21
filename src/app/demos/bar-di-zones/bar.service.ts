import { BAR_UNIDADE_CONFIG, BarUnidadeConfig } from './bar.config';
import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export function BarFactory (http: HttpClient, injector: Injector ) {
  return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
    ) { }

  public obterUnidade(): string {
    return 'unidade ID: ' + this.config.unidadeId + ' Token: '+ this.config.unidadeToken;
  }

  obterBebidas() : string {
    return 'Bebidas';
  }

  obterPorcoes() : string {
    return 'Porções';
  }

  obterRefeicoes() : string {
    return 'Refeições';
  }
}

export abstract class BarServices {
  obterBebidas: () => string;
}
