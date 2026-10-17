import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class Projects {
  search = '';

  projects = [
    {
      name: 'Student Management System',
      description: 'Web-based student registration system',
      likes: 0
    },
    {
      name: 'Library Management System',
      description: 'Book tracking application',
      likes: 0
    },
    {
      name: 'AI Tutor',
      description: 'Learning support chatbot',
      likes: 0
    }
  ];

  like(project: any) {
    project.likes++;
  }
}