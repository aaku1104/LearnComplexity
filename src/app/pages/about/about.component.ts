import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../../reviews/reviews.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, ReviewsComponent]
})
export class AboutComponent {
  isLg = false;
  isMd = false;
  isSm = false;

  steps = [
    {
      icon: 'search',
      label: 'Find a Course',
      description: 'Browse hundreds of expert-led courses across tech, design and business.'
    },
    {
      icon: 'access',
      label: 'Get Access',
      description: 'Enroll instantly and access all course materials from any device.'
    },
    {
      icon: 'learn',
      label: 'Start Learning',
      description: 'Learn at your own pace with hands-on projects and expert mentorship.'
    }
  ];

}