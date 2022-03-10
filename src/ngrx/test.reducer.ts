import {Action, createFeatureSelector, createReducer, createSelector, on, State} from '@ngrx/store';
import * as TestActions from "./test.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ItemData} from "../entities/item-data";

export const adapter: EntityAdapter<ItemData> = createEntityAdapter<ItemData>({
    sortComparer: false
});

export interface TestState extends EntityState<ItemData> {

}

export const initialState: TestState = adapter.getInitialState({

});

export const testReducer = createReducer(
  initialState,
  on(TestActions.AddNewItem, (state, { itemData }) => {
        return adapter.addOne(
          itemData,
            {
                ...state,
            })
    }),

);

export const { selectAll } = adapter.getSelectors();
export const selectTestState = createFeatureSelector<TestState>('test');
export const selectAllItems = createSelector(selectTestState, selectAll);

export function TestReducer(state: TestState | undefined, action: Action) {
  return testReducer(state, action);
}

