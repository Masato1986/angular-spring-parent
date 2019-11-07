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
  selectedId = -1;
  selectedTodo = '';

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.taskDataService.findAll().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  clickRow(taskTodo: Task) {
    this.selectedId = taskTodo.id;
    const selectedValue = this.taskList.filter(value => value.id === this.selectedId)[0];
    this.selectedTodo = selectedValue.todo;
  }

  onColor(taskTodo: Task) {
    if (taskTodo.id === this.selectedId) {
      return 'click';
    } else {
      return 'not_click';
    }
  }

}
