import { Routes } from '@angular/router';

export const COURSE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./courses').then(m => m.Courses),
    title: 'Algorithm Complexity Courses - All Courses'
  },
  {
    path: 'ui-design-for-beginners',
    loadComponent: () => import('../coursedetails1/coursedetails1.component').then(m => m.CourseDetails1Component),
    title: 'UI Design Course - Learn Complexity'
  },
  {
    path: 'mobile-dev-react-native',
    loadComponent: () => import('../coursedetails2/coursedetails2.component').then(m => m.CourseDetails2Component),
    title: 'Mobile Development Course - Learn Complexity'
  },
  {
    path: 'website-dev-zero-to-hero',
    loadComponent: () => import('../coursedetails3/coursedetails3.component').then(m => m.CourseDetails3Component),
    title: 'Web Development Course - Learn Complexity'
  },
  {
    path: 'data-science-with-python',
    loadComponent: () => import('../coursedetails4/coursedetails4.component').then(m => m.CourseDetails4Component),
    title: 'Data Science Course - Learn Complexity'
  },
  {
    path: 'digital-marketing-mastery',
    loadComponent: () => import('../coursedetails5/coursedetails5.component').then(m => m.CourseDetails5Component),
    title: 'Digital Marketing Course - Learn Complexity'
  },
  {
    path: 'python-programming-masterclass',
    loadComponent: () => import('../coursedetails6/coursedetails6.component').then(m => m.CourseDetails6Component),
    title: 'Python Programming Course - Learn Complexity'
  }
];
