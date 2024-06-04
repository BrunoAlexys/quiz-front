import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioSelecaoComponent } from './componentes/formulario-selecao/formulario-selecao.component';
import { PerguntasComponent } from './componentes/perguntas/perguntas.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';

const routes: Routes = [
  { path: '', redirectTo: '/formulario-selecao', pathMatch: 'full'},
  { path: 'formulario-selecao', component: FormularioSelecaoComponent},
  { path: 'perguntas', component: PerguntasComponent},
  {path: 'resultado', component: ResultadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
