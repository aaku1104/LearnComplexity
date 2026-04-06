import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: string;
  author?: string;
  datePublished?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  update(config: SeoConfig) {
    this.title.setTitle(`${config.title} | Learn Complexity`);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    if (config.keywords)
      this.meta.updateTag({ name: 'keywords', content: config.keywords });

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
    this.meta.updateTag({ property: 'og:url', content: config.canonicalUrl ?? '' });
    this.meta.updateTag({ property: 'og:image', content: config.ogImage ?? 'https://learncomplexity.com/assets/og-default.png' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Learn Complexity' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.ogImage ?? 'https://learncomplexity.com/assets/og-default.png' });
    this.meta.updateTag({ name: 'twitter:site', content: '@learncomplexity' });

    if (config.canonicalUrl) this.setCanonical(config.canonicalUrl);
  }

  addJsonLd(schema: Record<string, unknown>) {
    const existing = this.doc.querySelector('#page-schema');
    if (existing) existing.remove();

    const script = this.doc.createElement('script');
    script.id = 'page-schema';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schema);
    this.doc.head.appendChild(script);
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
