import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskDataService} from '../task-data.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  taskList: Task[];
  selected = '';

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.taskDataService.findAll().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  clickRow(taskTodo: Task) {
    this.selected = taskTodo.todo;
  }

  onColor(taskTodo: Task) {
    if (taskTodo.todo === this.selected) {
      return 'click';
    } else {
      return 'not_click';
    }
  }

}
