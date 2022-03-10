import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ItemData} from "../entities/item-data";
import {selectAllItems, TestState} from "./test.reducer";

@Injectable()
export class TestSelectors {

  constructor(private store: Store<TestState>) {}

  getAllItems(): Observable<ItemData[]> {
    return this.store.select(selectAllItems);
  }

}
