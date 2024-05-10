import { PerguntasDTO } from './../../models/Perguntas_dtos';
import { Component } from '@angular/core';
import { FormularioSelecaoService } from '../../service/formulario-selecao.service';

@Component({
  selector: 'app-formulario-selecao',
  templateUrl: './formulario-selecao.component.html',
  styleUrl: './formulario-selecao.component.css',
})


export class FormularioSelecaoComponent {
  numQuestions: any = "";
  difficulty: string = '';
  category: string = '';
  categoryList: string[] = [];
  time: any = "";

  constructor(private formularioSelecaoService: FormularioSelecaoService) { }

  ngOnInit(): void {
    this.formularioSelecaoService.getCategory().subscribe((categoryList) => {
      this.categoryList = categoryList;
    });
  }

  comecarQuiz(): void {
    let perguntasDTO: PerguntasDTO = {
      amount: this.numQuestions,
      category: this.category,
      difficulty: this.difficulty
    };

    this.formularioSelecaoService.getPerguntas(perguntasDTO).subscribe((perguntas) => {
      console.log(perguntas);
    });
  }

}
