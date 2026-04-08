import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BreadcrumbComponent]
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);
  
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
    this.seo.setPage({
      title: 'About Learn Complexity - Free Algorithm Education',
      description: 'Learn who we are and why we built Learn Complexity - a free platform to master Big O notation and algorithm analysis for developers.',
      url: '/about'
    });

    this.seo.update({
      title: 'About LearnComplexity – Our Mission & Story',
      description: 'Learn about our mission to make algorithm complexity education accessible. Discover our story, teaching approach, and commitment to helping developers master Big O notation.',
      keywords: 'about learncomplexity, mission, story, algorithm education, big o notation, computer science learning',
      canonicalUrl: 'https://learncomplexity.com/about',
      type: 'website'
    });

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About LearnComplexity – Our Mission & Story",
      "description": "Learn about our mission to make algorithm complexity education accessible. Discover our story, teaching approach, and commitment to helping developers master Big O notation.",
      "url": "https://learncomplexity.com/about",
      "provider": {
        "@type": "Organization",
        "name": "Learn Complexity",
        "sameAs": "https://learncomplexity.com"
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Learn Complexity",
        "description": "Educational platform dedicated to making algorithm complexity and Big O notation accessible to all developers",
        "url": "https://learncomplexity.com",
        "sameAs": "https://learncomplexity.com"
      },
      "inLanguage": "en"
    });
  }
}