import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Store} from "@ngrx/store";
import {TestStore} from "../ngrx-test-store/testStore";
import {TestDispatcher} from "../ngrx/test.dispatchers";
import {TestSelectors} from "../ngrx/test.selectors";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        TestDispatcher, TestSelectors,
        {provide: Store, useClass: TestStore}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
