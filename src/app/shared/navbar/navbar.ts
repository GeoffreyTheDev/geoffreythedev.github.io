import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private router: Router) {}

  resetBlog(event: Event) {
    event.preventDefault(); // Prevents RouterLink from conflicting with this custom navigation
    
    // Explicitly clearing 'post' forces Angular to process the route change
    this.router.navigate(['/blog'], { queryParams: { post: null } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}