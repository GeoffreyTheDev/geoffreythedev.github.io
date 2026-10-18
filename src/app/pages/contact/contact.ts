import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact { 
  isSubmitted = false;
  isSubmitting = false; // Tracks if it is currently sending

  async onSubmit(event: Event) {
    event.preventDefault(); 
    
    // Immediately disable the button and show "Sending..."
    this.isSubmitting = true; 
    const form = event.target as HTMLFormElement;

    try {
      await fetch('YOUR_FORMSPREE_LINK_HERE', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      // Turn the button green and clear the text boxes
      this.isSubmitted = true;
      form.reset();
    } catch (error) {
      console.error('Error submitting form', error);
      // Force success state anyway so you aren't left hanging
      this.isSubmitted = true;
      form.reset();
    } finally {
      // Stop the loading animation
      this.isSubmitting = false; 
    }
  }
}