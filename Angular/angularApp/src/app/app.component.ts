import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent], // Import To-Do Component
  template: `
    <h1>Simple Angular To-Do App</h1>
    <app-todo></app-todo>
  `,
  styles: [`h1 { text-align: center; color: #3498db; }`]
})
export class AppComponent {}
