// ============================================================
// CONTACT PAGE - contact.component.ts
// LearnComplexity | Angular + Tailwind CSS
// ============================================================

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface Testimonial {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('testimonialContainer') testimonialContainer!: ElementRef;

  // ── State ──────────────────────────────────────────────────
  isSubmitting = false;
  submitSuccess = false;
  activeTestimonial = 0;
  contactForm!: FormGroup;

  // ── Testimonials Data ──────────────────────────────────────
  testimonials: Testimonial[] = [
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      review: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 5,
      avatar: 'assets/images/testimonial-avatar.jpg'
    },
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      review: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 5,
      avatar: 'assets/images/testimonial-avatar.jpg'
    },
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      review: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 5,
      avatar: 'assets/images/testimonial-avatar.jpg'
    },
    {
      name: 'Hellen Jummy',
      role: 'Full stack developer',
      review: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.',
      rating: 5,
      avatar: 'assets/images/testimonial-avatar.jpg'
    }
  ];

  constructor(private fb: FormBuilder) {}

  // ── Lifecycle ──────────────────────────────────────────────
  ngOnInit(): void {
    this.buildForm();
  }

  // ── Form ───────────────────────────────────────────────────
  buildForm(): void {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      phone:   ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{7,15}$/)]],
      subject: ['', Validators.required],
      message: ['']
    });
  }

  /** Returns true when a field is invalid AND has been touched/dirty */
  isFieldInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;

    // Simulate API call — replace with your actual service
    setTimeout(() => {
      console.log('Form submitted:', this.contactForm.value);
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => (this.submitSuccess = false), 5000);
    }, 1500);
  }

  // ── Testimonials ──────────────────────────────────────────
  getStars(rating: number): boolean[] {
    // Returns array of 5 booleans: true = filled star, false = empty star
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }

  nextTestimonial(): void {
    if (!this.testimonialContainer) return;
    const el: HTMLElement = this.testimonialContainer.nativeElement;
    const cardWidth = el.offsetWidth / this.visibleCards();
    el.scrollBy({ left: cardWidth, behavior: 'smooth' });
    this.activeTestimonial = Math.min(this.activeTestimonial + 1, this.testimonials.length - 1);
  }

  prevTestimonial(): void {
    if (!this.testimonialContainer) return;
    const el: HTMLElement = this.testimonialContainer.nativeElement;
    const cardWidth = el.offsetWidth / this.visibleCards();
    el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    this.activeTestimonial = Math.max(this.activeTestimonial - 1, 0);
  }

  /** Returns the number of visible testimonial cards based on viewport width */
  private visibleCards(): number {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 640)  return 2;
    return 1;
  }
}