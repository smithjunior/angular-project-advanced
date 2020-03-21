import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServices, BarFactory } from './bar.service';
import { Component, OnInit, Inject, Injector, NgZone } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // { provide: BarService, useClass: BarService },
    { provide: BarServices, useExisting: BarService },
    { 
      provide: BarService,
      useFactory: BarFactory,
      deps: [
        HttpClient, Injector
      ]
    }
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;
  barBebida2: string;
  apiConfig: BarUnidadeConfig;
  dadosUnidade: string;

  constructor(
    private barService: BarService,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private barServices: BarServices,
    private ngZone: NgZone
    ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.barBebida2 = this.barServices.obterBebidas();
    this.apiConfig = this.ApiConfig;
    this.dadosUnidade = this.barService.obterUnidade();
  }

  public progress: number = 0;
  public label: string;

  processWithinAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalizado por dentro do Angular!'));
  }

  processOutsideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado por fora do Angular!'); });
      });
    });
  }
  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress} %`);

    if(this.progress < 100){
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    }else{
      doneCallback();
    }
  }
}
