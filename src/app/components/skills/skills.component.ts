import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'assets/icons/angular.png' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
    { name: 'HTML5', icon: 'assets/icons/html.png' },
    { name: 'CSS3', icon: 'assets/icons/css3.png' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.png' },
    { name: 'Git', icon: 'assets/icons/github.png' },
    { name: 'FIGMA', icon: 'assets/icons/figma.png' }
  ];
}
