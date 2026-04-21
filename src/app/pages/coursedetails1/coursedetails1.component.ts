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
  colorClass: string;
}

export interface CommentForm {
  name: string;
  email: string;
  subject: string;
  comments: string;
}

@Component({
  selector: 'app-course-details1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coursedetails1.component.html'
})
export class CourseDetails1Component implements OnInit {

  // Course header data
  course = {
    title: 'UI Design for Beginners',
    subtitle: 'Master the fundamentals of UI design with hands-on projects and real-world examples',
    lessonCount: '15+',
    duration: '8hr 45min',
    students: 128,
    category: 'UI / UX Design',
    originalPrice: 89.00,
    discountPercent: 40,
    rating: 4.5,
    reviewCount: 23,
    totalLectures: 68,
    totalDuration: '8:45:30',
    thumbnailUrl: 'assets/images/img1.webp',
    previewImageUrl: 'assets/images/img1.webp',
    isWishlisted: false,
  };

  instructor = {
    name: 'Sarah Johnson',
    role: 'Senior UI Designer',
    avatarUrl: 'assets/images/instructor-avatar.jpg',
    rating: 4.7,
    courseCount: 8,
    lessonCount: '15+',
    duration: '8hr 45min',
    totalStudents: '45,231',
    bio: 'Senior UI Designer with 10+ years of experience in creating beautiful and functional user interfaces for top tech companies.',
    skills: 'UI Design, UX Design, Figma, Sketch, Adobe XD, Prototyping, Design Systems, Typography, Color Theory, Mobile Design, Web Design, User Research',
    availability: [
      'Full Time Office Work',
      'Remote Work',
      'Freelance',
      'Contract',
      'Worldwide'
    ]
  };

  // Overview
  courseDescription = [
    'Start your journey into UI design with this comprehensive beginner-friendly course. Learn the principles of creating beautiful and functional user interfaces that users love.',
    'This course covers everything from basic design principles to advanced techniques used by professional UI designers. You\'ll work on real projects and build a portfolio that showcases your skills.'
  ];

  whatYoullLearn = [
    'Master UI design fundamentals',
    'Create stunning user interfaces',
    'Understand color theory and typography',
    'Design for mobile and web platforms',
    'Build a professional UI portfolio'
  ];

  requirements = [
    'No prior design experience needed',
    'A computer with internet access',
    'Willingness to learn and practice'
  ];

  // Includes
  inclusions: CourseInclusion[] = [
    { icon: 'play_circle', label: '8.5 hours on-demand video', colorClass: 'icon-red' },
    { icon: 'download', label: '45 downloadable resources', colorClass: 'icon-orange' },
    { icon: 'all_inclusive', label: 'Full lifetime access', colorClass: 'icon-green' },
    { icon: 'devices', label: 'Access on mobile and TV', colorClass: 'icon-blue' },
    { icon: 'assignment', label: '10 Assignments', colorClass: 'icon-purple' },
    { icon: 'workspace_premium', label: 'Certificate of Completion', colorClass: 'icon-gold' },
  ];

  // Course Features
  courseFeatures: CourseFeature[] = [
    { icon: 'person', label: 'Enrolled', value: '128 students' },
    { icon: 'schedule', label: 'Duration', value: '8.5 hours' },
    { icon: 'menu_book', label: 'Chapters', value: '12' },
    { icon: 'videocam', label: 'Video', value: '8.5 hours' },
    { icon: 'signal_cellular_alt', label: 'Level', value: 'Beginner' },
  ];

  // Course Modules
  courseModules: CourseModule[] = [
    { title: 'Introduction to UI Design', isOpen: false },
    { title: 'Design Principles', isOpen: false },
    { title: 'Color Theory', isOpen: false },
    { title: 'Typography Basics', isOpen: false },
  ];

  // Instructor Stats
  instructorStats: InstructorStat[] = [
    { icon: 'library_books', value: '8 Courses', colorClass: 'stat-orange' },
    { icon: 'play_lesson', value: '15+ Lesson', colorClass: 'stat-red' },
    { icon: 'schedule', value: '8hr 45min', colorClass: 'stat-yellow' },
    { icon: 'people', value: '45,231 students enrolled', colorClass: 'stat-blue' },
  ];

  // Comment Form
  commentForm: CommentForm = {
    name: '',
    email: '',
    subject: '',
    comments: ''
  };

  // Star arrays
  courseStars: boolean[] = [];
  instructorStars: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courseStars = this.buildStars(this.course.rating, 5);
    this.instructorStars = this.buildStars(this.instructor.rating, 5);
  }

  buildStars(rating: number, max: number): boolean[] {
    return Array.from({ length: max }, (_, i) => i < Math.round(rating));
  }

  toggleModule(index: number): void {
    this.courseModules[index].isOpen = !this.courseModules[index].isOpen;
  }

  toggleWishlist(): void {
    this.course.isWishlisted = !this.course.isWishlisted;
  }

  enrollNow(): void {
    console.log('Enrolling in course:', this.course.title);
    // Navigate to checkout / enrollment flow
  }

  submitComment(): void {
    if (this.commentForm.name && this.commentForm.email && this.commentForm.subject && this.commentForm.comments) {
      console.log('Comment submitted:', this.commentForm);
      this.commentForm = { name: '', email: '', subject: '', comments: '' };
    }
  }

  getDiscountedPrice(): number {
    return this.course.originalPrice * (1 - this.course.discountPercent / 100);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
