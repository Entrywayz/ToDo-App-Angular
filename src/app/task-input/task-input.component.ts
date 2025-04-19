import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { SuccessComponent } from "../success/success.component";

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule, NgFor, SuccessComponent, CommonModule],
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {
  @ViewChild(SuccessComponent) successComponent!: SuccessComponent;
  todoList: Task[] = [];
  newTask: string = '';

  addTask(): void {
    if(this.newTask.trim() !== '') {
      const newTodoItem: Task = {
        id: Date.now(),
        title: this.newTask,
        completed: false
      }

      this.todoList.push(newTodoItem);
      this.newTask = '';
      this.saveToLocalStorage();
      this.successComponent.message = 'Task added successfully!';
      this.successComponent.show();
    }
  }

  completeTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveToLocalStorage();
    this.successComponent.message = 'Task completed successfully!';
    this.successComponent.show();
  }

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem("itemsTodo", JSON.stringify(this.todoList));
  }

  private loadFromLocalStorage(): void {
    const storedItems = localStorage.getItem("itemsTodo");
    if(storedItems) {
      try {
        this.todoList = JSON.parse(storedItems) || [];
      } catch (e) {
        console.error('Error parsing stored tasks', e);
        this.todoList = [];
      }
    }
  }
}