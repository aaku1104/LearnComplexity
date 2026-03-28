import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // ─── Benefits ─────────────────────────────────────────────────────────────
  benefits = [
    { number: '01', title: 'Standardization',     highlighted: false, description: "When working in a global workplace, it's often difficult to gauge learners' training experiences, which are ..." },
    { number: '02', title: 'Reduced Costs',        highlighted: true,  description: "With Learncomplexity, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ..." },
    { number: '03', title: 'More Customization',   highlighted: false, description: "Just like learners aren't one-size-fits-all, learning is not a one-size-fits-all experience. By using different ..." },
    { number: '04', title: 'Affordable Pricing',   highlighted: false, description: "With Learncomplexity, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ..." },
    { number: '05', title: 'Learner Satisfaction', highlighted: false, description: "If you really want students to retain what they learn, you'll need to aim for high satisfaction rates. Bad ..." },
    { number: '06', title: 'Multimedia Materials', highlighted: false, description: "One of the main reasons why custom eLearning is effective is that it's the perfect delivery method for ..." },
  ];

  // ─── How It Works steps ────────────────────────────────────────────────────
  // Place your SVG icons at these paths inside src/assets/icons/
  steps = [
    {
      iconSrc: 'assets/icons/icon-search.svg',
      label: 'Sign up',
      description: 'Wonder twenty hunted and put income set desire expect. Am cottage calling.',
    },
    {
      iconSrc: 'assets/icons/icon-access.svg',
      label: 'Get Access',
      description: 'Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.',
    },
    {
      iconSrc: 'assets/icons/icon-learn.svg',
      label: 'Learn properly',
      description: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.',
    },
  ];

  // ─── Testimonials ──────────────────────────────────────────────────────────
  // Avatar: assets/images/testimonial-avatar.jpg
  testimonials = [
    { quote: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', rating: 4, avatar: 'assets/images/testimonial-avatar.jpg' },
    { quote: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', rating: 4, avatar: 'assets/images/testimonial-avatar.jpg' },
    { quote: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', rating: 4, avatar: 'assets/images/testimonial-avatar.jpg' },
    { quote: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', rating: 4, avatar: 'assets/images/testimonial-avatar.jpg' },
    { quote: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', rating: 4, avatar: 'assets/images/testimonial-avatar.jpg' },
  ];

  // ─── Slider state ──────────────────────────────────────────────────────────
  slideIndex = 0;
  visibleCount = 3;
  slideWidth = 0;

  get maxSlide(): number {
    return Math.max(0, this.testimonials.length - this.visibleCount);
  }

  get slideDots(): number[] {
    return Array.from({ length: this.maxSlide + 1 });
  }

  // ─── Lifecycle ─────────────────────────────────────────────────────────────
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateSlider(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: Event): void {
    if (typeof window !== 'undefined') {
      this.updateSlider((e.target as Window).innerWidth);
      this.slideIndex = Math.min(this.slideIndex, this.maxSlide);
    }
  }

  updateSlider(w: number): void {
    if (w >= 1024) {
      this.visibleCount = 3;
      this.slideWidth = Math.floor((Math.min(w - 64, 1200) - 64 - 48) / 3) + 24;
    } else if (w >= 640) {
      this.visibleCount = 2;
      this.slideWidth = Math.floor((Math.min(w - 64, 900) - 24) / 2) + 24;
    } else {
      this.visibleCount = 1;
      this.slideWidth = w - 64;
    }
  }

  prevSlide(): void { if (this.slideIndex > 0) this.slideIndex--; }
  nextSlide(): void { if (this.slideIndex < this.maxSlide) this.slideIndex++; }
  goToSlide(i: number): void { this.slideIndex = i; }
}