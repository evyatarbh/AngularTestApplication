import { BehaviorSubject, Observable } from 'rxjs';

export class GenericAction<ActionType, PayloadType> {
  type: ActionType;
  payload?: PayloadType;

  constructor(type: ActionType, payload?: PayloadType) {
    this.type = type;
    this.payload = payload;
  }
}
