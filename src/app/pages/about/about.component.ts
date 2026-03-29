import {
  Component,
  AfterViewInit,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type BenefitVariant = 'fill' | 'outline';
type StepIcon = 'search' | 'access' | 'learn';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderViewport') sliderViewport?: ElementRef<HTMLElement>;

  private resizeObserver?: ResizeObserver;
  benefits: {
    number: string;
    title: string;
    description: string;
    variant: BenefitVariant;
  }[] = [
    {
      number: '01',
      title: 'Standardization',
      variant: 'fill',
      description:
        "When working in a global workplace, it's often difficult to gauge learners' training experiences, which are ...",
    },
    {
      number: '02',
      title: 'Reduced Costs',
      variant: 'outline',
      description:
        "With Learncomplexity, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
    },
    {
      number: '03',
      title: 'More Customization',
      variant: 'fill',
      description:
        "Just like learners aren't one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...",
    },
    {
      number: '04',
      title: 'Affordable Pricing',
      variant: 'outline',
      description:
        "With Learncomplexity, there's no cost to reproduce materials and, thanks to mobile learning and microlearning ...",
    },
    {
      number: '05',
      title: 'Learner Satisfaction',
      variant: 'fill',
      description:
        "If you really want students to retain what they learn, you'll need to aim for high satisfaction rates. Bad ...",
    },
    {
      number: '06',
      title: 'Multimedia Materials',
      variant: 'outline',
      description:
        "One of the main reasons why custom eLearning is effective is that it's the perfect delivery method for ...",
    },
  ];

  steps: { icon: StepIcon; label: string; description: string }[] = [
    {
      icon: 'search',
      label: 'Sign up',
      description:
        'Wonder twenty hunted and put income set desire expect. Am cottage calling.',
    },
    {
      icon: 'access',
      label: 'Get Access',
      description:
        'Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.',
    },
    {
      icon: 'learn',
      label: 'Learn properly',
      description:
        'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.',
    },
  ];

  testimonials = [
    {
      quote:
        'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Peter James',
      role: 'Software Engineer',
      rating: 5,
      avatar: 'assets/images/testimonial-avatar.jpg',
    },
    {
      quote:
        'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'assets/images/testimonial-avatar.jpg',
    },
    {
      quote:
        'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'assets/images/testimonial-avatar.jpg',
    },
    {
      quote:
        'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'assets/images/testimonial-avatar.jpg',
    },
    {
      quote:
        'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'assets/images/testimonial-avatar.jpg',
    },
  ];

  slideIndex = 0;
  visibleCount = 3;
  slideWidth = 0;

  get maxSlide(): number {
    return Math.max(0, this.testimonials.length - this.visibleCount);
  }

  get slideDots(): number[] {
    return Array.from({ length: this.maxSlide + 1 });
  }

  ngAfterViewInit(): void {
    if (typeof ResizeObserver === 'undefined') {
      this.updateSliderFallback();
      return;
    }
    queueMicrotask(() => this.measureSlider());
    const el = this.sliderViewport?.nativeElement;
    if (el) {
      this.resizeObserver = new ResizeObserver(() => this.measureSlider());
      this.resizeObserver.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.measureSlider();
  }

  private measureSlider(): void {
    const el = this.sliderViewport?.nativeElement;
    if (!el) {
      this.updateSliderFallback();
      return;
    }
    const w = el.clientWidth;
    const gap = 20;
    if (w >= 1024) {
      this.visibleCount = 3;
      const card = (w - gap * 2) / 3;
      this.slideWidth = card + gap;
    } else if (w >= 640) {
      this.visibleCount = 2;
      const card = (w - gap) / 2;
      this.slideWidth = card + gap;
    } else {
      this.visibleCount = 1;
      this.slideWidth = w;
    }
    this.slideIndex = Math.min(this.slideIndex, this.maxSlide);
  }

  private updateSliderFallback(): void {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const inner = Math.min(w - 48, 1200);
    const gap = 20;
    if (w >= 1024) {
      this.visibleCount = 3;
      const card = (inner - gap * 2) / 3;
      this.slideWidth = card + gap;
    } else if (w >= 640) {
      this.visibleCount = 2;
      const card = (inner - gap) / 2;
      this.slideWidth = card + gap;
    } else {
      this.visibleCount = 1;
      this.slideWidth = Math.max(280, w - 48);
    }
  }

  prevSlide(): void {
    if (this.slideIndex > 0) this.slideIndex--;
  }
  nextSlide(): void {
    if (this.slideIndex < this.maxSlide) this.slideIndex++;
  }
  goToSlide(i: number): void {
    this.slideIndex = i;
  }
}
