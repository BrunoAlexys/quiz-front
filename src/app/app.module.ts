import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioSelecaoComponent } from './componentes/formulario-selecao/formulario-selecao.component';
import { PerguntasComponent } from './componentes/perguntas/perguntas.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioSelecaoComponent,
    PerguntasComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
