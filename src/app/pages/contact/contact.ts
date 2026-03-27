import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;

  testimonials = [
    { text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', avatar: '' },
    { text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', avatar: '' },
    { text: 'Learning on this platform has been an amazing experience! The live projects helped me apply concepts practically, and the mentors were incredibly supportive throughout my journey.', name: 'Hellen Jummy', role: 'Full stack developer', avatar: '' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      this.contactForm.reset();
      setTimeout(() => { this.formSubmitted = false; }, 5000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}