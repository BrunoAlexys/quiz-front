import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizData } from '../models/quiz-data';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private quizDataSubject = new BehaviorSubject<any | null>(null);
  quizData$ = this.quizDataSubject.asObservable();

  setQuizData(data: any) {
    this.quizDataSubject.next(data);
  }
}
