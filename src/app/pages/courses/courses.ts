import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReviewsComponent, BreadcrumbComponent],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css'],
})
export class Courses implements OnInit {
  private seo = inject(SeoService);

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

  ngOnInit(): void {
    this.seo.update({
      title: 'Algorithm Courses – Learn Big O Notation & Data Structures',
      description: 'Explore comprehensive courses on algorithm complexity, Big O notation, and data structures. Master time and space complexity analysis with hands-on tutorials.',
      keywords: 'algorithm courses, big o notation courses, data structures, time complexity, space complexity, programming tutorials, algorithm analysis',
      canonicalUrl: 'https://learncomplexity.com/courses',
      type: 'website'
    });

    this.seo.addJsonLd({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Algorithm Complexity & Big O Notation Courses",
      "description": "Comprehensive courses covering algorithm complexity, Big O notation, time and space complexity analysis with practical examples",
      "provider": {
        "@type": "Organization",
        "name": "Learn Complexity",
        "sameAs": "https://learncomplexity.com"
      },
      "url": "https://learncomplexity.com/courses",
      "educationalLevel": "Beginner to Advanced",
      "teaches": ["Big O notation", "time complexity", "space complexity", "data structures", "algorithm analysis"],
      "inLanguage": "en"
    });
  }
}
