// contact-us.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { SeoService } from '../../services/seo.service';

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
  imports: [CommonModule, FormsModule, RouterModule, ReviewsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactUsComponent implements OnInit {
 
  private seo = inject(SeoService);

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

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact LearnComplexity – Get in Touch',
      description: 'Have questions about Big O notation or algorithm complexity? Contact our team for support, feedback, or collaboration opportunities. We\'re here to help you learn.',
      keywords: 'contact learncomplexity, support, help, algorithm questions, big o notation help, customer service',
      canonicalUrl: 'https://learncomplexity.com/contact',
      type: 'website'
    });

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact LearnComplexity – Get in Touch",
      "description": "Have questions about Big O notation or algorithm complexity? Contact our team for support, feedback, or collaboration opportunities. We're here to help you learn.",
      "url": "https://learncomplexity.com/contact",
      "provider": {
        "@type": "Organization",
        "name": "Learn Complexity",
        "sameAs": "https://learncomplexity.com"
      },
      "inLanguage": "en"
    });
    
    this.updateVisibleTestimonials();
    this.updateVisibleCount();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.updateVisibleCount());
    }
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