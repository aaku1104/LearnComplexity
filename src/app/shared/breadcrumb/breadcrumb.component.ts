import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumb-nav">
      <ol vocab="https://schema.org/" typeof="BreadcrumbList">
        <li
          *ngFor="let crumb of crumbs; let i = index; let last = last"
          property="itemListElement"
          typeof="ListItem"
        >
          <a
            *ngIf="!last; else plainText"
            [routerLink]="crumb.url"
            property="item"
            typeof="WebPage"
          >
            <span property="name">{{ crumb.label }}</span>
          </a>
          <ng-template #plainText>
            <span property="name" aria-current="page">{{ crumb.label }}</span>
          </ng-template>
          <meta property="position" [attr.content]="i + 1" />
        </li>
      </ol>
    </nav>
    <script type="application/ld+json" [innerHTML]="jsonLd"></script>
  `,
  styles: [`
    .breadcrumb-nav {
      padding: 0.5rem 1rem;
      background: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }
    ol {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
      align-items: center;
      gap: 0.25rem;
    }
    li:not(:last-child)::after {
      content: '›';
      margin-left: 0.25rem;
      color: #9ca3af;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
      font-size: 0.875rem;
      outline: none;
    }
    a:hover { text-decoration: underline; }
    a:focus-visible {
      outline: 2px solid #4f46e5;
      border-radius: 2px;
    }
    span[aria-current] {
      color: #6b7280;
      font-size: 0.875rem;
    }
  `]
})
export class BreadcrumbComponent implements OnChanges {
  @Input() crumbs: Breadcrumb[] = [];
  jsonLd: string = '';

  ngOnChanges(): void {
    this.jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: this.crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: `https://learncomplexity.com${c.url}` 
      }))
    });
  }
}
