import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState, initialState } from './redux/state';
import { rootReducer } from './redux/store';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
import { TodoService } from './todo/todo-service.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    AddTodoComponent,
    TodoListComponent,
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>) {
    this.ngRedux.configureStore(rootReducer, initialState);
  }
}
