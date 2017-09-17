import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoServiceService } from '../todo/todo-service.service';
import { AppState } from '../redux/state';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css'],
})
export class TodoOverviewComponent implements OnInit {

  @select('todos') todos;
  @select('lastUpdate') lastUpdate;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private todoService: TodoServiceService,
  ) {}

  ngOnInit() {}

  removeTodos() {
    this.todoService.removeTodos();
  }
}
