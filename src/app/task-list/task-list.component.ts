import { Component, OnInit } from '@angular/core';

// cria componente
@Component({
  selector: 'app-task-list', // tag do componente
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  tasks = [];
  task = '';

  add() {
    this.tasks.push(this.task);
  }
}
