import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  // Course header data
  course = {
    title: 'The Complete Web Developer Course 2.0',
    subtitle: 'Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python',
    lessonCount: '12+',
    duration: '9hr 30min',
    students: 32,
    category: 'Web Development',
    originalPrice: 99.00,
    discountPercent: 50,
    rating: 4.0,
    reviewCount: 15,
    totalLectures: 92,
    totalDuration: '10:56:11',
    thumbnailUrl: 'assets/images/course-thumbnail.jpg',
    previewImageUrl: 'assets/images/course-preview.jpg',
    isWishlisted: false,
  };

  instructor = {
    name: 'Nicole Brown',
    role: 'UX/UI Designer',
    avatarUrl: 'assets/images/instructor-avatar.jpg',
    rating: 4.5,
    courseCount: 5,
    lessonCount: '12+',
    duration: '9hr 30min',
    totalStudents: '270,866',
    bio: 'UI/UX Designer, with 7+ Years Experience. Guarantee of High Quality Work.',
    skills: 'Web Design, UI Design, UX/UI Design, Mobile Design, User Interface Design, Sketch, Photoshop, GUI, Html, Css, Grid Systems, Typography, Minimal, Template, English, Bootstrap, Responsive Web Design, Pixel Perfect, Graphic Design, Corporate, Creative, Flat, Luxury and much more.',
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
    'Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best Seller course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well over 300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring your skills shine in the thriving digital marketplace.',
    'This course will get your familiar with Generative AI and the effective use of ChatGPT and is perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt Engineering skills to the next level!'
  ];

  whatYoullLearn = [
    'Become a UX designer',
    'You will be able to add UX designer to your CV',
    'Become a UI designer',
    'Build & test a full website design.',
    'Build & test a full mobile app.'
  ];

  requirements = [
    'You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.',
    'No previous design experience is needed.',
    'No previous Adobe XD skills are needed.'
  ];

  // Includes
  inclusions: CourseInclusion[] = [
    { icon: 'play_circle', label: '11 hours on-demand video', colorClass: 'icon-red' },
    { icon: 'download', label: '69 downloadable resources', colorClass: 'icon-orange' },
    { icon: 'all_inclusive', label: 'Full lifetime access', colorClass: 'icon-green' },
    { icon: 'devices', label: 'Access on mobile and TV', colorClass: 'icon-blue' },
    { icon: 'assignment', label: 'Assignments', colorClass: 'icon-purple' },
    { icon: 'workspace_premium', label: 'Certificate of Completion', colorClass: 'icon-gold' },
  ];

  // Course Features
  courseFeatures: CourseFeature[] = [
    { icon: 'person', label: 'Enrolled', value: '32 students' },
    { icon: 'schedule', label: 'Duration', value: '20 hours' },
    { icon: 'menu_book', label: 'Chapters', value: '15' },
    { icon: 'videocam', label: 'Video', value: '12 hours' },
    { icon: 'signal_cellular_alt', label: 'Level', value: 'Beginner' },
  ];

  // Course Modules
  courseModules: CourseModule[] = [
    { title: 'Getting Started', isOpen: false },
    { title: 'The Brief', isOpen: false },
    { title: 'Wireframing Low Fidelity', isOpen: false },
    { title: 'Type, Color & Icon Introduction', isOpen: false },
  ];

  // Instructor Stats
  instructorStats: InstructorStat[] = [
    { icon: 'library_books', value: '5 Courses', colorClass: 'stat-orange' },
    { icon: 'play_lesson', value: '12+ Lesson', colorClass: 'stat-red' },
    { icon: 'schedule', value: '9hr 30min', colorClass: 'stat-yellow' },
    { icon: 'people', value: '270,866 students enrolled', colorClass: 'stat-blue' },
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

  courseId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseStars = this.buildStars(this.course.rating, 5);
    this.instructorStars = this.buildStars(this.instructor.rating, 5);
    
    // Get course ID from route
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id') || '';
      console.log('Course ID:', this.courseId);
      // Here you would typically load course data based on the ID
    });
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