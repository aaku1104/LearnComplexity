import { Component, OnInit, inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  private seo = inject(SeoService);
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

  constructor() {
    const pageTitle = "Learn Algorithm Complexity - Big O Notation Made Simple | Learn Complexity";
    const pageDescription = "Master algorithm complexity, Big O notation and data structures with expert-led courses. Earn certificates and unlock internship opportunities.";
    const pageUrl = "https://learn-complexity.vercel.app/home";

    // Set all SEO tags immediately in constructor
    this.seo.setTitle(pageTitle);
    this.seo.setMetaDescription(pageDescription);
    this.seo.setCanonical(pageUrl);
    this.seo.setOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: pageUrl
    });

    // Add EducationalOrganization schema for home page
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Learn Complexity",
      "url": "https://learn-complexity.vercel.app",
      "logo": "https://learn-complexity.vercel.app/assets/images/lc-logo.webp",
      "description": "Expert-led courses on algorithm complexity, Big O notation and data structures.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-91234-56789",
        "contactType": "customer service"
      },
      "sameAs": []
    };

    this.seo.addJsonLd(organizationSchema);
  }

  ngOnInit() {
    // SEO is already set in constructor
  }
}
