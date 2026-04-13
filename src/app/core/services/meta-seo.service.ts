import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class MetaSeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  setPage(config: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }) {
    // Set page title with exact format: "[Page Name] | Learn Complexity"
    this.title.setTitle(config.title + ' | Learn Complexity');
    
    // Set meta description
    this.meta.updateTag({ name: 'description', content: config.description });
    
    // Set Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: config.title + ' | Learn Complexity' });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image || '/assets/images/og-default.png' });
    this.meta.updateTag({ property: 'og:url', content: config.url || 'https://learn-complexity.vercel.app' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Learn Complexity' });
    
    // Set Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title + ' | Learn Complexity' });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || '/assets/images/og-default.png' });
    
    // Set canonical URL
    if (config.url) {
      this.setCanonical(config.url);
    }
  }

  setCanonical(url: string) {
    let link: HTMLLinkElement = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
