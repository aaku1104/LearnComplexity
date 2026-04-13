import { Component, OnInit, inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MetaSeoService } from '../../core/services/meta-seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  private metaSeo = inject(MetaSeoService);
  private structuredData = inject(StructuredDataService);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  onImageError(event: any): void {
    const img = event.target;
    const fallbackSrc = 'assets/images/default-avatar.png';
    
    // Check if we're in browser environment using Angular's platform detection
    if (isPlatformBrowser(this.platformId)) {
      // Try to load fallback image
      if (img.src !== fallbackSrc) {
        img.src = fallbackSrc;
        img.onerror = null; // Prevent infinite loop
      } else {
        // If fallback also fails, show a colored placeholder
        this.renderer.setStyle(img, 'display', 'none');
        const parent = img.parentElement;
        if (parent) {
          const placeholder = this.renderer.createElement('div');
          this.renderer.setStyle(placeholder, 'background-color', '#f0f0f0');
          this.renderer.setStyle(placeholder, 'display', 'flex');
          this.renderer.setStyle(placeholder, 'align-items', 'center');
          this.renderer.setStyle(placeholder, 'justify-content', 'center');
          this.renderer.setStyle(placeholder, 'color', '#666');
          this.renderer.setStyle(placeholder, 'font-size', '12px');
          this.renderer.appendChild(parent, placeholder);
        }
      }
    }
  }

  ngOnInit() {
    this.metaSeo.setPage({
      title: 'Learn Complex Topics Simply',
      description: 'Master complex algorithms and Big O notation with interactive examples. Learn time complexity, space complexity, and data structures step by step.',
      url: 'https://learn-complexity.vercel.app/'
    });

    // Add structured data schemas
    this.structuredData.injectWebSiteSchema();
    this.structuredData.injectOrganizationSchema();
    this.structuredData.injectBreadcrumbSchema([
      { name: 'Home', url: 'https://learn-complexity.vercel.app/' }
    ]);
  }
}
