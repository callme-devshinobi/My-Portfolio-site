import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent { 
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Alex-Morgan-CV.pdf';
    link.click();
  }

  scrollToContact() {
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
