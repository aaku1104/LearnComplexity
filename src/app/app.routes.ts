import { Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
];