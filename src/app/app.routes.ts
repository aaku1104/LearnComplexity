import { Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'courses', component: Courses },
  // Catch all sub-routes like /courses/design, /courses/ui-ux, etc.
  { path: 'courses/**', component: Courses },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
];