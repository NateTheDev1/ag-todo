import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../components/models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosURl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURl}${this.todosLimit}`);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todosURl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
