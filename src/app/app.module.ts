import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {TestSelectors} from "../ngrx/test.selectors";
import {TestDispatcher} from "../ngrx/test.dispatchers";
import {testReducer} from "../ngrx/test.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

interface AppState {}
const appState: AppState = {};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot(appState, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }}),
    StoreModule.forFeature('test',testReducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [
    TestSelectors,
     TestDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
