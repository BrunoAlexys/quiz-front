import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerguntasDTO } from '../models/Perguntas_dtos';

@Injectable({
  providedIn: 'root'
})
export class FormularioSelecaoService {

  constructor(private httpClient: HttpClient) { }

  getPerguntas(perguntasDTO: PerguntasDTO): Observable<PerguntasDTO[]> {
    return this.httpClient.post<PerguntasDTO[]>('http://localhost:8080/quiz/search', perguntasDTO);
  }

  getCategory(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/quiz/category');
  }

}
