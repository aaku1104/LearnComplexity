import { Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Learn Algorithm Complexity - Big O Notation',
    data: {
      description: 'Master Big O notation and algorithm complexity analysis through interactive tutorials, examples, and hands-on practice.',
      keywords: 'big o notation, algorithm complexity, data structures, programming tutorials, time complexity, space complexity',
      canonicalUrl: 'https://learncomplexity.com/',
      type: 'website'
    }
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.routes').then(m => m.COURSE_ROUTES),
    title: 'Algorithm Complexity Courses',
    data: {
      description: 'Comprehensive courses on algorithm complexity, data structures, and performance optimization for developers.',
      keywords: 'algorithm courses, complexity analysis, programming courses, data structures, performance optimization',
      canonicalUrl: 'https://learncomplexity.com/courses',
      type: 'website'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About - Learn Complexity',
    data: {
      description: 'Learn about our mission to make algorithm complexity education accessible and engaging for developers worldwide.',
      keywords: 'about learncomplexity, algorithm education, programming education, mission, team',
      canonicalUrl: 'https://learncomplexity.com/about',
      type: 'website'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactUsComponent),
    title: 'Contact - Learn Complexity',
    data: {
      description: 'Get in touch with the Learn Complexity team for support, feedback, or collaboration opportunities.',
      keywords: 'contact learncomplexity, support, feedback, collaboration, customer service',
      canonicalUrl: 'https://learncomplexity.com/contact',
      type: 'website'
    }
  },
  {
    path: 'reviews',
    loadComponent: () => import('./reviews/reviews.component').then(m => m.ReviewsComponent),
    title: 'Student Reviews - Learn Complexity',
    data: {
      description: 'Read authentic reviews from students who have mastered algorithm complexity through our courses.',
      keywords: 'student reviews, testimonials, course reviews, algorithm complexity success stories',
      canonicalUrl: 'https://learncomplexity.com/reviews',
      type: 'website'
    }
  }
];