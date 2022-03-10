import { createAction, props } from '@ngrx/store';

export const AddNewItem = createAction('[Item] Add', props<any>());
