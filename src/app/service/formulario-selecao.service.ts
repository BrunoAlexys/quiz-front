import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/category_dtos';
import { QuestionDTO } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormularioSelecaoService {

  constructor(private httpClient: HttpClient) { }

  getPerguntas(amount: number, category: string, difficulty: string): Observable<QuestionDTO[]> {
    const url = `http://localhost:8080/quiz/perguntas?amount=${amount}&category=${category}&difficulty=${difficulty}`;
    return this.httpClient.get<QuestionDTO[]>(url);
  }

  getCategory(): Observable<CategoryDTO[]> {
    return this.httpClient.get<CategoryDTO[]>('http://localhost:8080/quiz/category');
  }
}
