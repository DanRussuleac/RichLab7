import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  imports: [FormsModule],
})
export class EditTaskComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe((task: Task) => (this.task = task));
  }

  onSubmit() {
    this.taskService.updateTask(this.task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
