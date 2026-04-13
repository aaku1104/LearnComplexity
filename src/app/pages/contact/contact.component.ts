// contact-us.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { AnalyticsService } from '../../services/analytics.service';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgOptimizedImage, ReviewsComponent, BreadcrumbComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactUsComponent implements OnInit {
 
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);
  private analytics = inject(AnalyticsService);

  crumbs = [
    { label: 'Home', url: '/' },
    { label: 'Contact Us', url: '/contact' }
  ];

  dots = Array(70).fill(0);

  // Dot grid array for hero section (8 cols x 7 rows = 56 dots)
  dotArray = Array(70).fill(0);

  // Contact form data
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  formSubmitted = false;

  // Testimonials data
  testimonials: Testimonial[] = [
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 4,
      image: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 4,
      image: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 4,
      image: 'assets/images/testimonial-avatar.webp'
    },
    
  ];

  currentTestimonialIndex = 0;
  visibleCount = 3;
  visibleTestimonials: Testimonial[] = [];

  constructor() {
    const pageTitle = "Contact Us | Learn Complexity";
    const pageDescription = "Get in touch with the Learn Complexity team. We're here to help with courses, internships, and placement support.";
    const pageUrl = "https://learn-complexity.vercel.app/contact";

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
    this.structuredData.injectBreadcrumbSchema([
      { name: 'Home', url: 'https://learn-complexity.vercel.app/' },
      { name: 'Contact Us', url: 'https://learn-complexity.vercel.app/contact' }
    ]);
    
    this.updateVisibleTestimonials();
    this.updateVisibleCount();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.updateVisibleCount());
    }
  }

  ngOnInit(): void {
    // SEO is already set in constructor
  }

  updateVisibleCount(): void {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    if (width < 768) {
      this.visibleCount = 1;
    } else if (width < 1024) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 3;
    }
    this.updateVisibleTestimonials();
  }

  updateVisibleTestimonials(): void {
    this.visibleTestimonials = [];
    for (let i = 0; i < this.visibleCount; i++) {
      const idx = (this.currentTestimonialIndex + i) % this.testimonials.length;
      this.visibleTestimonials.push(this.testimonials[idx]);
    }
  }

  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateVisibleTestimonials();
  }

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.subject) {
      console.log('Form submitted:', this.formData);
      
      // Track form submission event
      this.analytics.trackFormSubmission('contact_form');
      
      this.formSubmitted = true;
      // Reset form
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      setTimeout(() => { this.formSubmitted = false; }, 5000);
    }
  }

  onImgError(event: any): void {
    event.target.src = 'assets/images/fallback.webp';
  }
}