# Breadcrumb Component

## Overview
A breadcrumb navigation component with Schema.org structured data for improved SEO and Google search results.

## Features
- **Schema.org BreadcrumbList markup** - Rich structured data for search engines
- **Accessibility** - Proper ARIA labels and semantic HTML
- **Angular Router Integration** - Seamless navigation with RouterLink
- **Dynamic JSON-LD** - Automatically generates structured data
- **Responsive Design** - Works on all screen sizes

## Usage

### Import the Module
```typescript
import { BreadcrumbModule } from './shared/breadcrumb/breadcrumb.module';
```

### Use in Component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BreadcrumbModule],
  template: `
    <app-breadcrumb [crumbs]="breadcrumbs"></app-breadcrumb>
  `
})
export class ExampleComponent {
  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/courses' },
    { label: 'Advanced Algorithms', url: '/courses/advanced-algorithms' }
  ];
}
```

### Input Properties

#### `@Input() crumbs: Breadcrumb[]`
Array of breadcrumb objects with:
- `label`: Display text for the breadcrumb
- `url`: Navigation path for the breadcrumb

### Breadcrumb Interface
```typescript
interface Breadcrumb {
  label: string;
  url: string;
}
```

## Schema.org Output
The component generates the following structured data:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://learncomplexity.com/"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Courses",
      "item": "https://learncomplexity.com/courses"
    }
  ]
}
```

## SEO Benefits
- **Rich Snippets**: Enhanced display in Google search results
- **Navigation Context**: Clear site structure for search engines
- **CTR Improvement**: Better visibility in search results
- **Accessibility**: WCAG compliant navigation

## Integration Notes
- Add `BreadcrumbModule` to your feature module or app module
- Component is standalone - can be used directly in other standalone components
- Automatically generates JSON-LD structured data for SEO
