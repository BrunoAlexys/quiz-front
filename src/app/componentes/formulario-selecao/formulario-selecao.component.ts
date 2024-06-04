import { Component } from '@angular/core';
import { FormularioSelecaoService } from '../../service/formulario-selecao.service';
import { CategoryDTO } from '../../models/category_dtos';
import { Router } from '@angular/router';
import { QuizServiceService } from '../../service/quiz-service.service';
import { QuizData } from '../../models/quiz-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-selecao',
  templateUrl: './formulario-selecao.component.html',
  styleUrl: './formulario-selecao.component.css',
})


export class FormularioSelecaoComponent {
  numQuestions: string = "";
  difficulty: string = "";
  selectedCategory: string = "";
  categoryList: CategoryDTO[] = [];
  time: any = "";
  formulario!: FormGroup;

  constructor(
    private formularioSelecaoService: FormularioSelecaoService,
    private router: Router,
    private quizService: QuizServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.validarFormulario();
  }

  validarFormulario(): void {
    this.formulario = this.formBuilder.group({
      numQuestions: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      category: ['', [Validators.required]],
      time: ['', [Validators.required]]
    });
  }

  getCategorias(): void {
    this.formularioSelecaoService.getCategory().subscribe((categoryList: CategoryDTO[]) => {
      this.categoryList = categoryList;
      this.categoryList.forEach(category => console.log(category));
    }, error => {
      console.error('Erro ao obter categorias:', error);
    });
  }

  comecarQuiz(): void {
    const quizData: QuizData = {
      amount: parseInt(this.numQuestions),
      difficulty: this.difficulty,
      selectedCategory: this.selectedCategory,
      time: this.time
    };

    this.quizService.setQuizData(quizData);
    this.router.navigate(['/perguntas']);
  }

}
