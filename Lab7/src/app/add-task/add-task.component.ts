import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  imports: [FormsModule],
})
export class AddTaskComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit() {
    this.taskService.addTask(this.task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
