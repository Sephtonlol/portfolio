import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
