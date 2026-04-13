import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReviewsComponent, BreadcrumbComponent],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnInit {
  private seo = inject(SeoService);
  private structuredData = inject(StructuredDataService);

  crumbs = [
    { label: 'Home', url: '/' },
    { label: 'Courses', url: '/courses' }
  ];

  courseTabs = ['Design', 'Developer', 'Business', 'Marketing', 'Photography'];
  activeTab = 'Design';

  activeCategory = 'Development';

  courses = [
    {
      title: 'UI Design For Beginners',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Bestseller',
      image: 'images/img1.png',
      bannerColor: '#C0392B',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon1.png', alt: 'Figma' },
        { src: 'images/icon2.png', alt: 'XD' },
        { src: 'images/icon3.png', alt: 'Sketch' },
      ],
    },
    {
      title: 'Website Dev Zero To Hero',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Premium',
      image: 'images/img2.png',
      bannerColor: '#7D3C98',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon4.png', alt: 'HTML' },
        { src: 'images/icon5.png', alt: 'CSS' },
        { src: 'images/icon6.png', alt: 'JS' },
      ],
    },
    {
      title: 'Mobile Dev React Native',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Premium',
      image: 'images/img3.png',
      bannerColor: '#27AE60',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon7.png', alt: 'React' },
      ],
    },
    {
      title: 'UI Design For Beginners',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Bestseller',
      image: 'images/img1.png',
      bannerColor: '#C0392B',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon1.png', alt: 'Figma' },
        { src: 'images/icon2.png', alt: 'XD' },
        { src: 'images/icon3.png', alt: 'Sketch' },
      ],
    },
    {
      title: 'Website Dev Zero To Hero',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Premium',
      image: 'images/img2.png',
      bannerColor: '#7D3C98',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon4.png', alt: 'HTML' },
        { src: 'images/icon5.png', alt: 'CSS' },
        { src: 'images/icon6.png', alt: 'JS' },
      ],
    },
    {
      title: 'Mobile Dev React Native',
      subtitle: 'by Kitani Studio',
      category: 'Artificial Intelligence',
      badge: 'Premium',
      image: 'images/img3.png',
      bannerColor: '#27AE60',
      duration: '24 Weeks',
      rating: 4.8,
      reviews: '1.2k Reviews',
      description: 'Master the complete machine learning lifecycle. Learn to design, build, and deploy production-ready models.',
      instructor: 'Dr. Sarah Chen',
      instructorImg: 'images/course-profile.png',
      originalPrice: '$199',
      price: '$89',
      techIcons: [
        { src: 'images/icon7.png', alt: 'React' },
      ],
    },
  ];

  categories = [
    { name: 'Art & Design',     icon: 'images/icon1.png',  count: 38 },
    { name: 'Development',      icon: 'images/icon2.png',  count: 38 },
    { name: 'Communication',    icon: 'images/icon3.png',  count: 38 },
    { name: 'Videography',      icon: 'images/icon4.png',  count: 38 },
    { name: 'Photography',      icon: 'images/icon5.png',  count: 38 },
    { name: 'Marketing',        icon: 'images/icon6.png',  count: 38 },
    { name: 'Content Writing', icon: 'images/icon7.png',  count: 38 },
    { name: 'Finance',          icon: 'images/icon8.png',  count: 38 },
    { name: 'Science',          icon: 'images/icon9.png',  count: 38 },
    { name: 'Network',          icon: 'images/icon10.png', count: 38 },
  ];

  reviewIndex = 0;
  reviewDots  = [0, 1, 2, 3, 4];

  allReviews = [
    {
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'images/reviewimg.webp',
    },
    {
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Product',
      rating: 4,
      avatar: 'images/reviewimg.webp',
    },
    {
      text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      rating: 4,
      avatar: 'images/reviewimg.webp',
    },
    {
      text: 'An outstanding platform that truly accelerates your learning curve. I got a job offer within 3 months of completing my course!',
      name: 'James K.',
      role: 'UI/UX Designer',
      rating: 5,
      avatar: 'images/reviewimg.webp',
    },
    {
      text: 'Fantastic instructors and well-structured content. The community support made learning enjoyable every single day.',
      name: 'Sara M.',
      role: 'Data Scientist',
      rating: 5,
      avatar: 'images/reviewimg.webp',
    },
  ];

  get visibleReviews() {
    return [0, 1, 2].map(
      offset => this.allReviews[(this.reviewIndex + offset) % this.allReviews.length]
    );
  }

  nextReview() {
    this.reviewIndex = (this.reviewIndex + 1) % this.allReviews.length;
  }

  prevReview() {
    this.reviewIndex =
      (this.reviewIndex - 1 + this.allReviews.length) % this.allReviews.length;
  }

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }

  getEmptyStars(rating: number): number[] {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    return Array(5 - full - half).fill(0);
  }

  constructor() {
    const pageTitle = "All Courses | Learn Complexity";
    const pageDescription = "Browse 125+ expert-led courses in web development, UI/UX, mobile development, SAP, and more. Start learning today.";
    const pageUrl = "https://learn-complexity.vercel.app/courses";

    // Set all SEO tags immediately in constructor
    this.seo.setTitle(pageTitle);
    this.seo.setMetaDescription(pageDescription);
    this.seo.setCanonical(pageUrl);
    this.seo.setOpenGraph({
      title: pageTitle,
      description: pageDescription,
      url: pageUrl
    });

    // Add structured data schemas
    this.structuredData.injectEducationalOrganizationSchema();
    this.structuredData.injectBreadcrumbSchema([
      { name: 'Home', url: 'https://learn-complexity.vercel.app/' },
      { name: 'Courses', url: 'https://learn-complexity.vercel.app/courses' }
    ]);

    // Add ItemList schema for courses page
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "All Courses at Learn Complexity",
      "url": "https://learn-complexity.vercel.app/courses",
      "itemListElement": [
        {
          "@type": "Course",
          "position": 1,
          "name": "UI Design for Beginners",
          "description": "Master UI/UX design fundamentals with hands-on projects.",
          "provider": {
            "@type": "Organization",
            "name": "Learn Complexity",
            "sameAs": "https://learn-complexity.vercel.app"
          }
        }
      ]
    };

    this.seo.addJsonLd(itemListSchema);
  }

  ngOnInit(): void {
    // SEO is already set in constructor
  }
}
