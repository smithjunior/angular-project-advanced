import { TodoModule } from './demos/todo-list/todo.module';
import { BarService } from './demos/bar-di-zones/bar.service';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { CadastroGuard } from './services/cadastro.guard';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil, TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[] = [
  BarService
];
@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgBrazil,
    TextMask.TextMaskModule,
    CustomFormsModule,
    NavegacaoModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1,
      unidadeToken: 'eca938c99a0e9ff9102dc'
    }),
    TodoModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
