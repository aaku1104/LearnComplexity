import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer';
import { AnalyticsService } from './services/analytics.service';
import { RouterSeoService } from './services/router-seo.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  title = 'LearnComplexity';
  private analytics = inject(AnalyticsService);
  private routerSeo = inject(RouterSeoService);
  private router = inject(Router);

  constructor() {
    // AnalyticsService automatically initializes and tracks page views
    // RouterSeoService automatically updates SEO metadata based on route data
    
    // Focus management for screen readers on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Set focus to main content for screen readers
      setTimeout(() => {
        const mainElement = document.getElementById('main-content');
        if (mainElement) {
          mainElement.focus();
          mainElement.setAttribute('tabindex', '-1');
          mainElement.style.outline = 'none';
        }
      }, 100); // Small delay to ensure DOM is ready
    });
  }
}