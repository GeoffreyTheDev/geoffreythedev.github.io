import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact { 
  isSubmitted = false;
  isSubmitting = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onSubmit(event: Event) {
    event.preventDefault(); 
    this.isSubmitting = true; 
    const form = event.target as HTMLFormElement;

    // 1. Send the email silently in the background
    fetch('https://formspree.io/f/myekvzkj', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      this.showSuccess(form);
    }).catch(() => {
      this.showSuccess(form);
    });

    // 2. The Fail-Safe: Force the green success state after 1.5 seconds
    setTimeout(() => {
      if (this.isSubmitting) {
        this.showSuccess(form);
      }
    }, 1500);
  }

  // 3. The function that updates the visual screen
  showSuccess(form: HTMLFormElement) {
    this.isSubmitting = false;
    this.isSubmitted = true;
    form.reset();
    this.cdr.detectChanges(); 
  }
}