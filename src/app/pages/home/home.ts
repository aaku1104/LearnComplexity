import { Component, OnInit, inject } from '@angular/core';
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

  onImageError(event: any): void {
    const img = event.target;
    const fallbackSrc = 'assets/images/default-avatar.png';
    
    // Try to load fallback image
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      img.onerror = null; // Prevent infinite loop
    }
  }

  constructor() {
    const pageTitle = "Learn Complexity - Home  | Learn Complexity";
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
