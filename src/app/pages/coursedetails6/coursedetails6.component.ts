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
  selector: 'app-course-details6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coursedetails6.component.html'
})
export class CourseDetails6Component implements OnInit {

  // Course header data
  course = {
    title: 'Python Programming Masterclass',
    subtitle: 'Learn Python from scratch and build real-world applications with this comprehensive programming course',
    lessonCount: '20+',
    duration: '16hr 20min',
    students: 312,
    category: 'Programming',
    originalPrice: 119.00,
    discountPercent: 50,
    rating: 4.8,
    reviewCount: 58,
    totalLectures: 142,
    totalDuration: '16:20:15',
    thumbnailUrl: 'assets/images/img3.webp',
    previewImageUrl: 'assets/images/img3.webp',
    isWishlisted: false,
  };

  instructor = {
    name: 'Alex Thompson',
    role: 'Senior Python Developer',
    avatarUrl: 'assets/images/instructor-avatar.jpg',
    rating: 4.9,
    courseCount: 7,
    lessonCount: '20+',
    duration: '16hr 20min',
    totalStudents: '124,567',
    bio: 'Senior Python Developer with 15+ years of experience building scalable applications and teaching programming to thousands of students worldwide.',
    skills: 'Python, Django, Flask, FastAPI, Data Structures, Algorithms, OOP, Testing, Git, Docker, AWS, REST APIs, Machine Learning Basics',
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
    'Master Python programming from the ground up with this comprehensive course designed for beginners and intermediate learners.',
    'Learn Python fundamentals, advanced concepts, and build real-world projects that will showcase your skills to potential employers.'
  ];

  whatYoullLearn = [
    'Master Python fundamentals',
    'Build real-world applications',
    'Understand OOP concepts',
    'Work with databases and APIs',
    'Deploy Python applications'
  ];

  requirements = [
    'No programming experience needed',
    'A computer with internet access',
    'Basic computer skills',
    'Willingness to learn and practice'
  ];

  // Includes
  inclusions: CourseInclusion[] = [
    { icon: 'play_circle', label: '16.5 hours on-demand video', colorClass: 'icon-red' },
    { icon: 'download', label: '110 downloadable resources', colorClass: 'icon-orange' },
    { icon: 'all_inclusive', label: 'Full lifetime access', colorClass: 'icon-green' },
    { icon: 'devices', label: 'Access on mobile and TV', colorClass: 'icon-blue' },
    { icon: 'assignment', label: '18 Assignments', colorClass: 'icon-purple' },
    { icon: 'workspace_premium', label: 'Certificate of Completion', colorClass: 'icon-gold' },
  ];

  // Course Features
  courseFeatures: CourseFeature[] = [
    { icon: 'person', label: 'Enrolled', value: '312 students' },
    { icon: 'schedule', label: 'Duration', value: '16.5 hours' },
    { icon: 'menu_book', label: 'Chapters', value: '20' },
    { icon: 'videocam', label: 'Video', value: '16.5 hours' },
    { icon: 'signal_cellular_alt', label: 'Level', value: 'Beginner to Advanced' },
  ];

  // Course Modules
  courseModules: CourseModule[] = [
    { title: 'Python Basics', isOpen: false },
    { title: 'Data Structures', isOpen: false },
    { title: 'Object-Oriented Programming', isOpen: false },
    { title: 'Web Development with Django', isOpen: false },
  ];

  // Instructor Stats
  instructorStats: InstructorStat[] = [
    { icon: 'library_books', value: '7 Courses', colorClass: 'stat-orange' },
    { icon: 'play_lesson', value: '20+ Lesson', colorClass: 'stat-red' },
    { icon: 'schedule', value: '16hr 20min', colorClass: 'stat-yellow' },
    { icon: 'people', value: '124,567 students enrolled', colorClass: 'stat-blue' },
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
