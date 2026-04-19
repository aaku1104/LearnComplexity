import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReviewsComponent]
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);
  
  isLg = false;
  isMd = false;
  isSm = false;

  steps = [
    {
      icon: 'search',
      label: 'Find a Course',
      description: 'Browse hundreds of expert-led courses across tech, design and business.'
    },
    {
      icon: 'access',
      label: 'Get Access',
      description: 'Enroll instantly and access all course materials from any device.'
    },
    {
      icon: 'learn',
      label: 'Start Learning',
      description: 'Learn at your own pace with hands-on projects and expert mentorship.'
    }
  ];

  constructor() {
    const pageTitle = "About Us | Learn Complexity";
    const pageDescription = "Learn about our mission to make algorithm complexity education accessible. Meet our expert mentors and discover our story.";
    const pageUrl = "https://learn-complexity.vercel.app/about";

    // Set all SEO tags immediately in constructor
    this.seo.setTitle(pageTitle);
    this.seo.setMetaDescription(pageDescription);
    this.seo.setCanonical(pageUrl);
    this.seo.setOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: pageUrl
    });

    // Add structured data schemas
    this.structuredData.injectOrganizationSchema();
  }

  ngOnInit(): void {
    // SEO is already set in constructor
  }
}