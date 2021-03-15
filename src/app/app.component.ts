import { Component } from '@angular/core';
import { Model } from 'src/models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new Model();

  getTitle() {
    return this.model.title;
  }

  getItems() {
    return this.model.items.filter((item) => !item.action);
  }
}
