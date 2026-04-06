import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'Learn Algorithm Complexity - Big O Notation'
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses').then(m => m.Courses),
    title: 'Algorithm Complexity Courses'
  },
  {
    path: 'courses/**',
    loadComponent: () =>
      import('./pages/courses/courses').then(m => m.Courses),
    title: 'Algorithm Complexity Courses'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About - Learn Complexity'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactUsComponent),
    title: 'Contact - Learn Complexity'
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./reviews/reviews.component').then(m => m.ReviewsComponent),
    title: 'Student Reviews - Learn Complexity'
  }
];