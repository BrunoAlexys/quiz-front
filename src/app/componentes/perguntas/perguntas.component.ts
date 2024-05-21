import { Component } from '@angular/core';
import { QuizServiceService } from '../../service/quiz-service.service';
import { FormularioSelecaoService } from '../../service/formulario-selecao.service';
import { QuestionDTO } from '../../models/question';
import { Router } from '@angular/router';
import { ResultadoDTO } from '../../models/resultado';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrl: './perguntas.component.css'
})
export class PerguntasComponent {
  totalQuestao: number = 0;
  questaoAtual: number = 1;
  respostaSelecionada: string = "";
  tempoInicial: number = 0;
  tempoRestante: number = 0;
  timerId: any;
  difficulty: string = "";
  selectedCategory: string = "";
  perguntas: QuestionDTO[] = [];
  acertos: number = 0;


  constructor(
    private quizService: QuizServiceService,
    private formularioService: FormularioSelecaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.iniciarContagemRegressiva();
  }

  loadData(): void {
    this.quizService.quizData$.subscribe((data) => {
      if (data) {
        this.totalQuestao = data.amount;
        this.difficulty = data.difficulty;
        this.selectedCategory = data.selectedCategory;
        this.tempoRestante = data.time;
        this.tempoInicial = data.time;
      }
    });
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.formularioService.getPerguntas(this.totalQuestao, this.selectedCategory, this.difficulty)
      .subscribe((response) => {
        console.log(response);
        this.perguntas = response.map(pergunta => {
          let incorrectAnswers = pergunta.incorrectAnswers[0].replace(/[\[\]"]+/g, '').split(',');
          pergunta.allAnswers = this.shuffleArray([pergunta.correctAnswer, ...incorrectAnswers]);
          console.log(pergunta.allAnswers);
          return pergunta;
        });
      });
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  iniciarContagemRegressiva(): void {
    this.timerId = setInterval(() => {
      if (this.tempoRestante > 0) {
        this.tempoRestante--;
      } else {
        this.pararContagemRegressiva();
        this.proximaQuestao(true);
      }
    }, 1000);
  }

  pararContagemRegressiva(): void {
    clearInterval(this.timerId);
  }

  proximaQuestao(tempoAcabou = false): void {
    if((this.respostaSelecionada || tempoAcabou) && this.questaoAtual < this.totalQuestao) {
      this.verificarRespostas();
      this.questaoAtual++;
      this.tempoRestante = this.tempoInicial;
      this.iniciarContagemRegressiva();
    } else if (!tempoAcabou) {
      alert('Selecione uma resposta antes de prosseguir!');
    }
  }

  submitQuiz(): void {
    this.verificarRespostas();
    const resultado: ResultadoDTO = {
      acertos: this.acertos,
      totalQuestao: this.totalQuestao
    }
    this.quizService.setQuizData(resultado);
    this.router.navigate(['/resultado']);
  }

  isUltimaQuestao(): boolean {
    return this.questaoAtual === this.totalQuestao;
  }

  selecionarResposta(resposta: string): void {
    this.respostaSelecionada = resposta;
    console.log("Resposta selecionada: " + this.respostaSelecionada);
  }

  verificarRespostas(): void {
    if(this.respostaSelecionada.length > 0){
      if(this.respostaSelecionada === this.perguntas[this.questaoAtual - 1].correctAnswer){
        this.acertos++;
        console.log("Você tem " + this.acertos + " acertos!");
      }
    }
  }
}
