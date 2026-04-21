import { Routes } from '@angular/router';

export const COURSE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./courses').then(m => m.Courses),
    title: 'Algorithm Complexity Courses - All Courses'
  },
  {
    path: ':id',
    loadComponent: () => import('../coursedetails/coursedetails.component').then(m => m.CourseDetailsComponent),
    title: 'Course Details - Learn Complexity'
  }
];
