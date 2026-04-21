import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CourseModule {
  title: string;
  isOpen: boolean;
}

export interface CourseInclusion {
  icon: string;
  label: string;
  colorClass: string;
}

export interface CourseFeature {
  icon: string;
  label: string;
  value: string;
}

export interface InstructorStat {
  icon: string;
  value: string;
  label: string;
}

export interface CourseReview {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

@Component({
  selector: 'app-course-details2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coursedetails2.component.html'
})
export class CourseDetails2Component implements OnInit {
  courseId: string = '';
  
  // Course data for Mobile Development
  course = {
    title: 'Mobile Development Mastery',
    subtitle: 'Build native iOS and Android apps from scratch with React Native and Flutter',
    description: 'Master mobile app development with this comprehensive course covering React Native, Flutter, and native development. Learn to build cross-platform mobile applications for iOS and Android with modern frameworks and best practices.',
    category: 'Mobile Development',
    level: 'Beginner to Advanced',
    language: 'English',
    price: 149.00,
    originalPrice: 299.00,
    discount: 50,
    discountPercent: 50,
    duration: '12 weeks',
    lessons: 85,
    students: 2847,
    rating: 4.9,
    reviews: 2156,
    certificate: true,
    instructor: {
      name: 'Alex Thompson',
      title: 'Mobile Development Expert',
      bio: 'Alex is a senior mobile developer with 8+ years of experience building scalable mobile applications for startups and enterprises. Specialized in React Native and Flutter development.',
      avatar: 'assets/images/instructor-female.webp',
      stats: [
        { icon: 'users', value: '15,000+', label: 'Students' },
        { icon: 'award', value: '50+', label: 'Courses' },
        { icon: 'star', value: '4.9', label: 'Average Rating' }
      ]
    },
    features: [
      { icon: 'video', label: 'Video Lessons', value: '85 HD Videos' },
      { icon: 'file-text', label: 'Assignments', value: '25 Projects' },
      { icon: 'download', label: 'Resources', value: '150+ Downloads' },
      { icon: 'mobile', label: 'Access', value: 'Lifetime Access' },
      { icon: 'certificate', label: 'Certificate', value: 'Completion Certificate' }
    ],
    modules: [
      { title: 'Introduction to Mobile Development', isOpen: false },
      { title: 'React Native Fundamentals', isOpen: false },
      { title: 'Flutter Development', isOpen: false },
      { title: 'Native iOS Development', isOpen: false },
      { title: 'Native Android Development', isOpen: false },
      { title: 'Mobile App Architecture', isOpen: false },
      { title: 'UI/UX Design for Mobile', isOpen: false },
      { title: 'Mobile App Testing', isOpen: false },
      { title: 'App Store Deployment', isOpen: false },
      { title: 'Building Your Mobile Portfolio', isOpen: false }
    ],
    inclusions: [
      { icon: 'check-circle', label: '85 Video Lessons', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: '25 Practical Projects', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: '150+ Downloadable Resources', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: 'Lifetime Access', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: 'Certificate of Completion', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: 'Mobile Access', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: 'Assignments with Feedback', colorClass: 'text-green-600' },
      { icon: 'check-circle', label: 'Community Support', colorClass: 'text-green-600' }
    ],
    courseReviews: [
      {
        id: 1,
        author: 'Sarah Johnson',
        avatar: 'assets/images/avatar1.webp',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Excellent course! Emily explains complex marketing concepts in a very simple and practical way. The projects really helped me build a strong portfolio.'
      },
      {
        id: 2,
        author: 'Michael Chen',
        avatar: 'assets/images/avatar2.webp',
        rating: 5,
        date: '1 month ago',
        comment: 'This course transformed my career. I went from knowing nothing about digital marketing to landing a job as a marketing specialist. Highly recommend!'
      },
      {
        id: 3,
        author: 'Lisa Anderson',
        avatar: 'assets/images/avatar3.webp',
        rating: 4,
        date: '3 weeks ago',
        comment: 'Great content and very comprehensive. The only reason I\'m giving 4 stars is that I wish there were more advanced case studies. Otherwise, perfect!'
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {
    // Initialize any data if needed
  }

  toggleModule(index: number): void {
    this.course.modules[index].isOpen = !this.course.modules[index].isOpen;
  }

  enrollCourse(): void {
    console.log('Enrolling in Mobile Development Mastery course');
  }

  addToWishlist(): void {
    console.log('Added to wishlist');
  }

  shareCourse(): void {
    console.log('Sharing course');
  }

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  getDiscountedPrice(): number {
    return this.course.price;
  }
}
