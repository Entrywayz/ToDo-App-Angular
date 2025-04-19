import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="visible" class="success-message">
      {{ message }}
    </div>
  `,
  styles: [`
    .success-message {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #4CAF50;
      color: white;
      padding: 15px 20px;
      border-radius: 4px;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      animation: fadeInOut 2s ease-in-out forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
      20% { opacity: 1; transform: translateX(-50%) translateY(0); }
      80% { opacity: 1; transform: translateX(-50%) translateY(0); }
      100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
  `]
})
export class SuccessComponent {
  @Input() message: string = "You've completed the task!";
  visible: boolean = false;
  
  show() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 2000);
  }
}