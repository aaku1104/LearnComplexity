import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  private document = inject(DOCUMENT);
  private router = inject(Router);

  constructor() {
    this.initializeAccessibility();
  }

  private initializeAccessibility(): void {
    // Announce page changes to screen readers
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.announcePageChange();
    });

    // Add keyboard navigation support
    this.addKeyboardNavigation();
  }

  private announcePageChange(): void {
    // Create a temporary live region for announcements
    const announcement = this.document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';

    // Get current page title
    const pageTitle = this.document.title || 'Page';
    announcement.textContent = `${pageTitle} loaded`;

    this.document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }

  private addKeyboardNavigation(): void {
    // Add escape key to close modals/dropdowns
    this.document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.handleEscapeKey();
      }
    });
  }

  private handleEscapeKey(): void {
    // Close any open dropdowns or modals
    const dropdowns = this.document.querySelectorAll('[aria-expanded="true"]');
    dropdowns.forEach(dropdown => {
      (dropdown as HTMLElement).setAttribute('aria-expanded', 'false');
    });

    // Close any modals
    const modals = this.document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal => {
      (modal as HTMLElement).style.display = 'none';
    });
  }

  // Helper methods for common accessibility patterns
  announceToScreenReader(message: string): void {
    const announcement = this.document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;

    this.document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  }

  setFocus(element: HTMLElement): void {
    if (element) {
      setTimeout(() => {
        element.focus();
        element.setAttribute('tabindex', '-1');
        element.style.outline = 'none';
      }, 100);
    }
  }

  trapFocus(container: HTMLElement): (() => void) | void {
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (this.document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (this.document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);

    // Return cleanup function
    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }

  // ARIA attribute management
  setAriaExpanded(element: HTMLElement, expanded: boolean): void {
    if (element) {
      element.setAttribute('aria-expanded', expanded.toString());
    }
  }

  setAriaSelected(element: HTMLElement, selected: boolean): void {
    if (element) {
      element.setAttribute('aria-selected', selected.toString());
    }
  }

  setAriaHidden(element: HTMLElement, hidden: boolean): void {
    if (element) {
      element.setAttribute('aria-hidden', hidden.toString());
    }
  }

  setAriaLabel(element: HTMLElement, label: string): void {
    if (element) {
      element.setAttribute('aria-label', label);
    }
  }

  setAriaDescribedBy(element: HTMLElement, describedById: string): void {
    if (element) {
      element.setAttribute('aria-describedby', describedById);
    }
  }

  setAriaInvalid(element: HTMLElement, invalid: boolean): void {
    if (element) {
      element.setAttribute('aria-invalid', invalid.toString());
    }
  }
}
