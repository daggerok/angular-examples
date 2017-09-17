import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState, initialState } from './redux/state';
import { rootReducer } from './redux/store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoServiceService } from './todo/todo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoServiceService,
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
