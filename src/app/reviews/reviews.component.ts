import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../services/seo.service';

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  private seo = inject(SeoService);

  onImageError(event: any): void {
    // Only run on client side
    if (typeof document === 'undefined') {
      return;
    }
    
    const img = event.target;
    const fallbackSrc = 'assets/images/testimonial-avatar.webp';
    
    // Try to load fallback image
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      img.onerror = null; // Prevent infinite loop
    } else {
      // If fallback also fails, show a colored placeholder
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent) {
        const placeholder = document.createElement('div');
        placeholder.style.cssText = img.style.cssText + 'background-color:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;font-size:12px;';
        placeholder.textContent = 'Avatar';
        parent.appendChild(placeholder);
      }
    }
  }

  reviews: Review[] = [
    {
      name: 'Hellen Jummy',
      role: 'Full Stack Developer',
      rating: 4,
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and mentors were incredibly supportive throughout my journey.',
      avatar: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Theresa Webb',
      role: 'UI/UX Designer',
      rating: 5,
      text: 'The curriculum is well-structured and instructors are very knowledgeable. I went from a beginner to landing my first design job within 6 months of completing the course!',
      avatar: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Ralph Edwards',
      role: 'Backend Engineer',
      rating: 5,
      text: 'Excellent platform for learning modern backend technologies. The hands-on projects and code reviews gave me the confidence to tackle real-world challenges professionally.',
      avatar: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Jenny Wilson',
      role: 'Data Scientist',
      rating: 4,
      text: 'The data science track is comprehensive and up-to-date. The community support and peer learning opportunities made the journey enjoyable and highly productive.',
      avatar: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Devon Lane',
      role: 'Mobile Developer',
      rating: 5,
      text: 'I loved every bit of the mobile development course. The projects were challenging in the best way, and I\'m now building apps that people actually use daily.',
      avatar: 'assets/images/testimonial-avatar.webp'
    },
    {
      name: 'Kathryn Murphy',
      role: 'Product Manager',
      rating: 4,
      text: 'Great platform! The product management courses are practical and relevant to today\'s industry. I especially appreciated the live case study sessions with industry experts.',
      avatar: 'assets/images/testimonial-avatar.webp'
    }
  ];

  readonly starPaths: string[] = [
    'M12.03 4.83C12.52 3.31 14.68 3.31 15.17 4.83L16.28 8.26C16.5 8.94 17.14 9.4 17.85 9.4H21.46C23.05 9.4 23.72 11.44 22.43 12.38L19.51 14.5C18.93 14.92 18.69 15.67 18.91 16.35L20.02 19.77C20.52 21.29 18.78 22.56 17.49 21.62L14.57 19.5C13.99 19.08 13.21 19.08 12.63 19.5L9.71 21.62C8.42 22.56 6.68 21.29 7.18 19.77L8.29 16.35C8.51 15.67 8.27 14.92 7.69 14.5L4.77 12.38C3.48 11.44 4.15 9.4 5.74 9.4H9.35C10.06 9.4 10.7 8.94 10.92 8.26L12.03 4.83Z',
    'M39.23 4.83C39.72 3.31 41.88 3.31 42.37 4.83L43.48 8.26C43.7 8.94 44.34 9.4 45.05 9.4H48.66C50.25 9.4 50.92 11.44 49.63 12.38L46.71 14.5C46.13 14.92 45.89 15.67 46.11 16.35L47.22 19.77C47.72 21.29 45.98 22.56 44.69 21.62L41.77 19.5C41.19 19.08 40.41 19.08 39.83 19.5L36.91 21.62C35.62 22.56 33.88 21.29 34.38 19.77L35.49 16.35C35.71 15.67 35.47 14.92 34.89 14.5L31.97 12.38C30.68 11.44 31.35 9.4 32.94 9.4H36.55C37.26 9.4 37.9 8.94 38.12 8.26L39.23 4.83Z',
    'M66.43 4.83C66.92 3.31 69.07 3.31 69.57 4.83L70.68 8.26C70.9 8.94 71.54 9.4 72.25 9.4H75.86C77.45 9.4 78.12 11.44 76.83 12.38L73.91 14.5C73.33 14.92 73.09 15.67 73.31 16.35L74.42 19.77C74.92 21.29 73.18 22.56 71.89 21.62L68.97 19.5C68.39 19.08 67.61 19.08 67.03 19.5L64.11 21.62C62.82 22.56 61.08 21.29 61.58 19.77L62.69 16.35C62.91 15.67 62.67 14.92 62.09 14.5L59.17 12.38C57.88 11.44 58.55 9.4 60.14 9.4H63.75C64.46 9.4 65.1 8.94 65.32 8.26L66.43 4.83Z',
    'M93.63 4.83C94.12 3.31 96.27 3.31 96.77 4.83L97.88 8.26C98.1 8.94 98.74 9.4 99.45 9.4H103.06C104.65 9.4 105.32 11.44 104.03 12.38L101.11 14.5C100.53 14.92 100.29 15.67 100.51 16.35L101.62 19.77C102.12 21.29 100.38 22.56 99.08 21.62L96.17 19.5C95.59 19.08 94.81 19.08 94.23 19.5L91.31 21.62C90.02 22.56 88.28 21.29 88.77 19.77L89.89 16.35C90.11 15.67 89.87 14.92 89.29 14.5L86.37 12.38C85.08 11.44 85.74 9.4 87.34 9.4H90.95C91.66 9.4 92.3 8.94 92.52 8.26L93.63 4.83Z',
    'M120.83 4.83C121.32 3.31 123.47 3.31 123.97 4.83L125.08 8.26C125.3 8.94 125.94 9.4 126.65 9.4H130.26C131.85 9.4 132.52 11.44 131.23 12.38L128.31 14.5C127.73 14.92 127.49 15.67 127.71 16.35L128.82 19.77C129.32 21.29 127.58 22.56 126.28 21.62L123.37 19.5C122.79 19.08 122.01 19.08 121.43 19.5L118.51 21.62C117.22 22.56 115.48 21.29 115.97 19.77L117.09 16.35C117.31 15.67 117.07 14.92 116.49 14.5L113.57 12.38C112.28 11.44 112.94 9.4 114.54 9.4H118.15C118.86 9.4 119.5 8.94 119.72 8.26L120.83 4.83Z'
  ];

  readonly perPage: number = 3;
  currentIndex: number = 0;
  visibleReviews: Review[] = [];
  dots: number[] = [];

  ngOnInit(): void {
    // Only run SEO updates on client side to prevent SSR issues
    if (typeof window !== 'undefined') {
      this.seo.update({
        title: 'Student Reviews - LearnComplexity Success Stories',
        description: 'Read authentic reviews from students who mastered Big O notation and algorithm complexity. Discover how our courses helped developers advance their careers.',
        keywords: 'student reviews, testimonials, learncomplexity reviews, big o notation success stories, algorithm learning experience',
        canonicalUrl: 'https://learncomplexity.com/reviews',
        type: 'website'
      });

      this.seo.addJsonLd({
        "@context": "https://schema.org",
        "@type": "ReviewPage",
        "name": "Student Reviews - LearnComplexity Success Stories",
        "description": "Read authentic reviews from students who mastered Big O notation and algorithm complexity. Discover how our courses helped developers advance their careers.",
        "url": "https://learncomplexity.com/reviews",
        "provider": {
          "@type": "Organization",
          "name": "Learn Complexity",
          "sameAs": "https://learncomplexity.com"
        },
        "mainEntity": {
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "EducationalOrganization",
            "name": "Learn Complexity",
            "sameAs": "https://learncomplexity.com"
          },
          "ratingValue": "4.5",
          "reviewCount": "6",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": this.reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString()
          },
          "reviewBody": review.text,
          "publisher": {
            "@type": "Organization",
            "name": "Learn Complexity"
          }
        })),
        "inLanguage": "en"
      });
    }
    
    this.updateDots();
    this.updateVisibleReviews();
  }

  updateVisibleReviews(): void {
    this.visibleReviews = this.reviews.slice(this.currentIndex, this.currentIndex + this.perPage);
  }

  updateDots(): void {
    const totalDots = this.reviews.length - this.perPage + 1;
    this.dots = Array.from({ length: totalDots }, (_, i) => i);
  }

  changeSlide(dir: number): void {
    const max = this.reviews.length - this.perPage;
    this.currentIndex = Math.max(0, Math.min(max, this.currentIndex + dir));
    this.updateVisibleReviews();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateVisibleReviews();
  }
}