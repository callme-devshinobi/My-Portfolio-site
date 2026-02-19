import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  breakpoints = {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  };
  projects = [
    {
      title: 'E-Commerce Frontend',
      description: 'Responsive Angular storefront with product lisitings , cart , checkout UI , performance-optimized components architecture .',
      image: 'assets/icons/ecom.jpeg',
      demo: 'https://your-demo-link.com'
    }, 
    {
      title: 'Portfolio Website',
      description: 'Personal Angular portfolio showcasing projects, skills , animations , lazy loading , SEO-friendly routing, modern responsive design.',
      image: 'assets/icons/portfolio.jpeg',
      demo: '#'
    },
    {
      title: 'Blog Frontend',
      description: 'Angular blog frontend with markdown posts , categories , search , comments UI, SSR-ready structure , scalable component architecture.',
      image: 'assets/icons/blog.jpeg',
      demo: '#'
    }
  ];
}
