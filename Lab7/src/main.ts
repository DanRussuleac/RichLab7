import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { TaskListComponent } from './app/task-list/task-list.component';
import { TaskDetailComponent } from './app/task-detail/task-detail.component';
import { AddTaskComponent } from './app/add-task/add-task.component';
import { EditTaskComponent } from './app/edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; 

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(), 
    importProvidersFrom(FormsModule),
  ],
});
