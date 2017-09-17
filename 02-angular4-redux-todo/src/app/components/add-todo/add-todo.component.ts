import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo/todo';
import { select } from '@angular-redux/store';
import { TodoService } from '../../todo/todo-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent implements OnInit {

  @select('todos') todos;

  model: Todo;
  private defaultPrio = 'normal';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.resetModel();
  }

  addTodo() {
    this.todoService.addTodo(this.model);
    this.resetModel();
  }

  private resetModel() {
    if (this.model) this.defaultPrio = this.model.priority;
    this.model = {
      id: -1,
      description: '',
      responsible: '',
      priority: this.defaultPrio,
      isCompleted: false,
    };
  }
}
