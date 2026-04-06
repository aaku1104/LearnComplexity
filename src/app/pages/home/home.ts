import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.update({
      title: 'Learn Algorithm Complexity – Big O Notation Made Simple',
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
            "text": "Simply browse our course catalog, select the course you're interested in, and click the enroll button. You'll be guided through the registration and payment process."
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
          "name": "Are the courses self-paced or live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our courses are designed to be self-paced, allowing you to learn at your own schedule. However, we also offer live Q&A sessions and mentor support."
          }
        },
        {
          "@type": "Question",
          "name": "Can I access the courses on mobile or tablet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our platform is fully responsive and works seamlessly on mobile phones, tablets, and desktop computers. Learn anywhere, anytime."
          }
        }
      ]
    });
  }
}
