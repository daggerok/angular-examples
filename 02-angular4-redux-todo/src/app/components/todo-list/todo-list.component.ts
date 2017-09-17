import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { TodoService } from '../../todo/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {

  @select() todos;

  constructor(private todoService: TodoService) {}

  toggle(id: number) {
    this.todoService.toggleTodo(id);
  }

  remove(id: number) {
    this.todoService.removeTodo(id);
  }
}
