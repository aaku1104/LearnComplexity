import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private router = inject(Router);
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Initialize GA4 with environment-specific ID
    gtag('js', new Date());
    gtag('config', environment.googleAnalyticsId, {
      send_page_view: false, // Disable auto - Angular will send manually
      debug_mode: !environment.production
    });

    this.trackPageViews();
    this.isInitialized = true;
  }

  private trackPageViews(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.trackPageView(event.urlAfterRedirects);
    });
  }

  trackPageView(path?: string): void {
    if (!this.isInitialized) return;

    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: path || window.location.pathname
    });
  }

  trackEvent(eventName: string, parameters?: { [key: string]: any }): void {
    if (!this.isInitialized) return;

    gtag('event', eventName, {
      ...parameters,
      debug_mode: !environment.production
    });
  }

  // Specific event tracking methods
  trackFormSubmission(formName: string): void {
    this.trackEvent('form_submit', {
      form_name: formName,
      category: 'engagement'
    });
  }

  trackButtonClick(buttonName: string, buttonText?: string): void {
    this.trackEvent('click', {
      button_name: buttonName,
      button_text: buttonText,
      category: 'interaction'
    });
  }

  trackDownload(fileName: string, fileType: string): void {
    this.trackEvent('download', {
      file_name: fileName,
      file_type: fileType,
      category: 'engagement'
    });
  }

  trackNavigation(fromPage: string, toPage: string): void {
    this.trackEvent('navigation', {
      from_page: fromPage,
      to_page: toPage,
      category: 'navigation'
    });
  }

  trackSearch(searchTerm: string, resultsCount?: number): void {
    this.trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount,
      category: 'search'
    });
  }

  trackError(errorType: string, errorMessage?: string): void {
    this.trackEvent('error', {
      error_type: errorType,
      error_message: errorMessage,
      category: 'error'
    });
  }
}
