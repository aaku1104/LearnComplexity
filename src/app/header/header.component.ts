import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  route: string;
  hasDropdown?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private analytics = inject(AnalyticsService);
  private router = inject(Router);

  dropdownOpen = false;
  mobileNavOpen = false;
  currentRoute = '';

  constructor() {
    // Track current route for aria-current
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  menuItems: MenuItem[] = [
    { label: 'Home',       route: '/home' },
    { label: 'About Us',   route: '/about' },
    { label: 'Courses',    route: '/courses', hasDropdown: true },
    { label: 'Blogs',      route: '/blogs' },
    { label: 'Contact Us', route: '/contact' },
  ];

  onNavClick(item: MenuItem, event: MouseEvent): void {
    // Track navigation click
    this.analytics.trackButtonClick(`nav_${item.label.toLowerCase().replace(' ', '_')}`, item.label);
    
    // If item has dropdown, clicking the label still navigates (routerLink handles it).
    // Close dropdown on any nav click.
    if (!item.hasDropdown) {
      this.closeDropdown();
    }
  }

  toggleDropdown(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.analytics.trackButtonClick('toggle_dropdown', 'Toggle Dropdown');
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    if (!this.mobileNavOpen) {
      this.closeDropdown();
    }
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
    this.closeDropdown();
  }

  onSignIn(): void {
    // Track sign-in click
    this.analytics.trackButtonClick('sign_in', 'Sign In Button');
    // Navigate to sign-in page or open modal
    console.log('Sign In clicked');
  }

  onRegister(): void {
    // Track register click
    this.analytics.trackButtonClick('register', 'Register Button');
    // Navigate to register page or open modal
    console.log('Register clicked');
  }

  isActive(item: MenuItem): boolean {
    return this.currentRoute.includes(item.route);
  }
}