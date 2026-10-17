import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html'
})
export class Blog {
  posts = [
    {
      title: 'Learning Angular',
      content: 'Angular makes front-end development easier...'
    },
    {
      title: 'My Internship Experience',
      content: 'During my internship I learned...'
    }
  ];
}