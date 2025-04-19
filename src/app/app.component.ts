import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from "./task-input/task-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
