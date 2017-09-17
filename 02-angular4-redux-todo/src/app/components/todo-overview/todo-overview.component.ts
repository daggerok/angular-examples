import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { TodoService } from '../../todo/todo-service.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
})
export class TodoOverviewComponent {

  @select('todos') todos;
  @select('lastUpdate') lastUpdate;

  constructor(
    private todoService: TodoService,
  ) {}

  removeTodos() {
    this.todoService.removeTodos();
  }
}
