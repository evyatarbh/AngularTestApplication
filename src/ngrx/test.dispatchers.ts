import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import * as TestActions from "../ngrx/test.actions"
import {ItemData} from "../entities/item-data";
import {TestState} from "./test.reducer";

@Injectable()
export class TestDispatcher {

  constructor(private store: Store<TestState>) {}


  addNewItem(itemData: ItemData) {
    this.store.dispatch(TestActions.AddNewItem({ itemData }));
  }

}
