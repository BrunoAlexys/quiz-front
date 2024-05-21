import { Component } from '@angular/core';
import { QuizServiceService } from '../../service/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {

  acertos: number = 0;
  totalQuestoes: number = 0;

  constructor(
    private quizService: QuizServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.quizService.quizData$.subscribe((response) => {
      if (response) {
        this.acertos = response.acertos;
        this.totalQuestoes = response.totalQuestao;
      }
    })
  }

  restartQuiz(): void {
    this.router.navigate(['/']);
  }
}
