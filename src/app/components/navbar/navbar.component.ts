import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  activeSection: string = 'home';

  ngAfterViewInit(): void {
    this.observeSections();
  }

  scrollTo(id: string) {
    document.getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Alex-Morgan-CV.pdf';
    link.click();
  }

  observeSections() {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(section => observer.observe(section));
  }
  
}
