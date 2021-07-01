import { Component, OnInit } from '@angular/core';
// import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos;
  inputTodo: string = '';

  constructor(service: TodosService) {
    this.todos = service.getAllTodos();
  }

  title = 'All my todos';

  ngOnInit(): void {}

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
      return v;
    });
  }

  deleteTodo(id: number) {
    alert('Are you sure?');
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo) {
      this.todos.push({
        content:
          this.inputTodo.charAt(0).toUpperCase() + this.inputTodo.slice(1),
        completed: false,
      });
    } else {
      alert('Please add content');
    }

    this.inputTodo = '';
  }

  editTodo(id: number) {
    this.todos.map((foundTodo, i) => {
      if (i == id) {
      }
      return foundTodo;
    });
  }
}
