import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {TestDispatcher} from "./test.dispatchers";

@Injectable()
export class TestEffects {

  constructor(
    private actions$: Actions,
    private testDispatcher: TestDispatcher) {}

}
