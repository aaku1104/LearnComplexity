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
          "name": "What is Big O notation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Big O notation is a mathematical way to describe how the runtime or space usage of an algorithm grows as the input size increases."
          }
        },
        {
          "@type": "Question",
          "name": "What is time complexity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Time complexity measures how the running time of an algorithm scales with the input size, expressed using Big O notation."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate space complexity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Space complexity is calculated by analyzing how much memory an algorithm uses relative to the input size, including variables and data structures."
          }
        },
        {
          "@type": "Question",
          "name": "What are the most common Big O complexities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common Big O complexities are O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, and O(2^n) exponential."
          }
        }
      ]
    });
  }
}
