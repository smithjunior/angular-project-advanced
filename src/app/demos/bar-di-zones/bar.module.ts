import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarComponent } from './bar.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BarComponent
  ]
})
export class BarModule { 
  static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
    return {
      ngModule: BarModule,
      providers: [
        { provide: BAR_UNIDADE_CONFIG, useValue: config}
      ]
    }
  }

  static forChild() {

  }
}
