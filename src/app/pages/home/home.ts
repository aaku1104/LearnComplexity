import { Component, OnInit, inject, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  private seo = inject(SeoService);
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
    this.seo.setPage({
      title: 'Learn Big O Notation & Algorithm Complexity | Learn Complexity',
      description: 'Master time complexity and Big O notation with interactive examples. Free algorithm analysis guides for developers. O(1) to O(n!) explained simply.',
      url: '/'
    });

    this.seo.update({
      title: 'Learn Algorithm Complexity - Big O Notation Made Simple',
      description: 'Master time and space complexity with interactive examples. Big O notation guides, cheat sheets and algorithm analysis for developers.',
      keywords: 'big o notation, algorithm complexity, time complexity, space complexity, data structures, algorithms, programming, computer science',
      canonicalUrl: 'https://learncomplexity.com/',
      type: 'website'
    });

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I enroll in a course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply browse our course catalog, select course you're interested in, and click enroll button. You'll be guided through registration and payment process."
          }
        },
        {
          "@type": "Question",
          "name": "Will I get a certificate after completing a course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Once you complete all lessons and pass the final assessment, you'll receive an industry-recognized digital certificate that you can download or share on LinkedIn."
          }
        },
        {
          "@type": "Question",
          "name": "Are courses self-paced or live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our courses are designed to be self-paced, allowing you to learn at your own schedule. However, we also offer live Q&A sessions and mentor support."
          }
        },
        {
          "@type": "Question",
          "name": "Can I access courses on mobile or tablet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our platform is fully responsive and works seamlessly on mobile phones, tablets, and desktop computers. Learn anywhere, anytime."
          }
        }
      ]
    });
  }
}
