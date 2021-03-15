import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoapp';
  items = [
    {
      name: 'Anna',
      action: 'no',
    },
    {
      name: 'John',
      action: 'no',
    },
    {
      name: 'Larisa',
      action: 'no',
    },
  ];
}
