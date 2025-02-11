import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  constructor() {}

  languages: Array<string> = [
    'Python',
    'GDScript',
    'PHP',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
  ];
  frameworks: Array<string> = [
    'Bootstrap',
    'Ionic',
    'MongoDB',
    'Express',
    'Nuxt',
    'Angular',
  ];
}
