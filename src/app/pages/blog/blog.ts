import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class Blog {
  selectedPost: number | null = null;
  activeImage: string | null = null;
  previousScrollPosition: number = 0;

  openArticle(id: number): void {
    // 1. Save current scroll position on the article hub
    this.previousScrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.selectedPost = id;
    
    // 2. Scroll to top of the article for reading
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backToList(): void {
    this.selectedPost = null;
    
    // 3. Wait for Angular to re-render the list view, then scroll back to where you were
    setTimeout(() => {
      window.scrollTo({ top: this.previousScrollPosition, behavior: 'smooth' });
    }, 0);
  }

  openLightbox(imageSrc: string): void {
    this.activeImage = imageSrc;
  }

  closeLightbox(): void {
    this.activeImage = null;
  }
}