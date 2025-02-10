import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { QualificationComponent } from './pages/qualification/qualification.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'qualification/', component: QualificationComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
