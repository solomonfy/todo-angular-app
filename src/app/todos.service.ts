import { Injectable } from '@angular/core';
import { TODOS } from './mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  getAllTodos() {
    return TODOS;
  }
}
