import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { MetaSeoService } from '../../core/services/meta-seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BreadcrumbComponent, ReviewsComponent]
})
export class AboutComponent implements OnInit {
  private metaSeo = inject(MetaSeoService);
  private structuredData = inject(StructuredDataService);
  
  crumbs = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' }
  ];
  
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

  ngOnInit() {
    this.metaSeo.setPage({
      title: 'About Our Mission',
      description: 'Discover our mission to make algorithm education accessible. Learn about our story, teaching approach, and commitment to helping developers master complexity.',
      url: 'https://learn-complexity.vercel.app/about'
    });

    // Add structured data schemas
    this.structuredData.injectOrganizationSchema();
    this.structuredData.injectBreadcrumbSchema([
      { name: 'Home', url: 'https://learn-complexity.vercel.app/' },
      { name: 'About Us', url: 'https://learn-complexity.vercel.app/about' }
    ]);
  }
}