import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SeoService } from './seo.service';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root'
})
export class RouterSeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private analyticsService = inject(AnalyticsService);

  constructor() {
    this.initializeRouteTracking();
  }

  private initializeRouteTracking(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageMetadata();
    });
  }

  private updatePageMetadata(): void {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const routeData = route.snapshot.data;
    const routeTitle = route.snapshot.title;

    if (routeTitle || Object.keys(routeData).length > 0) {
      // Update SEO metadata
      this.seoService.update({
        title: routeTitle || 'Learn Complexity',
        description: routeData['description'] || 'Learn algorithm complexity and Big O notation',
        keywords: routeData['keywords'],
        canonicalUrl: routeData['canonicalUrl'],
        type: routeData['type'],
        ogImage: routeData['ogImage']
      });

      // Track navigation event
      const currentPath = this.router.url;
      this.analyticsService.trackNavigation(
        this.getPreviousPath(currentPath),
        currentPath
      );
    }
  }

  private getPreviousPath(currentPath: string): string {
    // Simple implementation - in a real app you might store navigation history
    const pathSegments = currentPath.split('/').filter(Boolean);
    if (pathSegments.length > 1) {
      return '/' + pathSegments.slice(0, -1).join('/');
    }
    return '/home';
  }
}
