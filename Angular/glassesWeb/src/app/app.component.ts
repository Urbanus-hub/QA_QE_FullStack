import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './forms/form/form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'glassesWeb';
}
