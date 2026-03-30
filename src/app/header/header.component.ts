import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  route: string;
  hasDropdown?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dropdownOpen = false;
  mobileNavOpen = false;

  menuItems: MenuItem[] = [
    { label: 'Home',       route: '/home' },
    { label: 'About Us',   route: '/about' },
    { label: 'Courses',    route: '/courses', hasDropdown: true },
    { label: 'Blogs',      route: '/blogs' },
    { label: 'Contact Us', route: '/contact' },
  ];

  onNavClick(item: MenuItem, event: MouseEvent): void {
    // If item has dropdown, clicking the label still navigates (routerLink handles it).
    // Close dropdown on any nav click.
    if (!item.hasDropdown) {
      this.closeDropdown();
    }
  }

  toggleDropdown(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
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
    // Navigate to sign-in page or open modal
    console.log('Sign In clicked');
  }

  onRegister(): void {
    // Navigate to register page or open modal
    console.log('Register clicked');
  }
}