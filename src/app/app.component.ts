import {Component} from '@angular/core';
import {TestSelectors} from "../ngrx/test.selectors";
import {TestDispatcher} from "../ngrx/test.dispatchers";
import {ItemData} from "../entities/item-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private itemsCopy: any[] = [];
  public items: ItemData[] = [];
  protected xz;

  constructor(public testSelectors: TestSelectors,
              public testDispatcher: TestDispatcher) {
    testSelectors.getAllItems().subscribe(
      result => {
        this.items = result;
      });
  }

  public addItem(eventTarget: HTMLInputElement) {
    let newItem: ItemData = {id: `${eventTarget.value}${Math.random()}`, name: eventTarget.value};
    this.testDispatcher.addNewItem(newItem);
    this.itemsCopy.push(newItem);
    eventTarget.value = "";
    eventTarget.focus();
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.addItem(<HTMLInputElement>event.target);
    }
  }

  private print() {
    this.itemsCopy.forEach(item => console.log(item.name));
  }
}
