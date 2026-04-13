import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class StructuredDataService {
  private doc = inject(DOCUMENT);

  /**
   * Add Course schema JSON-LD to page head
   */
  injectCourseSchema(course: {
    title: string;
    description: string;
    slug: string;
    level?: string;
    thumbnailUrl?: string;
  }) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': course.title,
      'description': course.description,
      'url': `https://learn-complexity.vercel.app/courses/${course.slug}`,
      'provider': {
        '@type': 'Organization',
        'name': 'Learn Complexity',
        'url': 'https://learn-complexity.vercel.app'
      },
      'educationalLevel': course.level || 'Beginner to Advanced',
      'inLanguage': 'en',
      'image': course.thumbnailUrl || '/assets/images/og-default.png'
    };

    this.addJsonLdScript('course-schema', schema);
  }

  /**
   * Add BreadcrumbList schema JSON-LD to page head
   */
  injectBreadcrumbSchema(breadcrumbs: Array<{
    name: string;
    url: string;
  }>) {
    const itemListElement = breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': breadcrumb.name,
      'item': breadcrumb.url
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };

    this.addJsonLdScript('breadcrumb-schema', schema);
  }

  /**
   * Add WebSite schema JSON-LD to page head
   */
  injectWebSiteSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Learn Complexity',
      'url': 'https://learn-complexity.vercel.app',
      'description': 'Interactive learning platform for Big O notation and algorithm complexity',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://learn-complexity.vercel.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };

    this.addJsonLdScript('website-schema', schema);
  }

  /**
   * Add Organization schema JSON-LD to page head
   */
  injectOrganizationSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Learn Complexity',
      'url': 'https://learn-complexity.vercel.app',
      'description': 'Educational platform dedicated to making algorithm complexity and Big O notation accessible to all developers',
      'logo': 'https://learn-complexity.vercel.app/assets/images/lc-logo.webp',
      'sameAs': [
        'https://twitter.com/learncomplexity',
        'https://linkedin.com/company/learncomplexity',
        'https://facebook.com/learncomplexity'
      ]
    };

    this.addJsonLdScript('organization-schema', schema);
  }

  /**
   * Add EducationalOrganization schema JSON-LD to page head
   */
  injectEducationalOrganizationSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': 'Learn Complexity',
      'url': 'https://learn-complexity.vercel.app',
      'description': 'Educational platform dedicated to making algorithm complexity and Big O notation accessible to all developers',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Algorithm Complexity Courses',
        'itemListElement': [
          {
            '@type': 'Course',
            'name': 'Algorithm Complexity Courses',
            'description': 'Comprehensive courses on algorithm complexity, Big O notation, and data structures',
            'url': 'https://learn-complexity.vercel.app/courses'
          }
        ]
      }
    };

    this.addJsonLdScript('educational-org-schema', schema);
  }

  /**
   * Generic method to add JSON-LD script to head
   */
  private addJsonLdScript(id: string, schema: object) {
    // Remove existing script with same id if it exists
    const existing = this.doc.querySelector(`#${id}`);
    if (existing) {
      existing.remove();
    }

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }

  /**
   * Remove all JSON-LD scripts from head (useful for route changes)
   */
  clearStructuredData() {
    const scripts = this.doc.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }
}
