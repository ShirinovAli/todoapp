import { ThrowStmt } from '@angular/compiler';
import { Action } from 'rxjs/internal/scheduler/Action';

export class Model {
  title;
  items;

  constructor() {
    this.title = 'ToDO App';
    this.items = [
      new ToDoItem('John', 'true'),
      new ToDoItem('Larisa', 'false'),
      new ToDoItem('James', 'false'),
      new ToDoItem('Chris', 'false'),
    ];
  }
}

export class ToDoItem {
  name: string;
  action: string;

  constructor(name: string, action: string) {
    this.name = name;
    this.action = action;
  }
}
