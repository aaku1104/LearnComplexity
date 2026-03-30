import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from '../../reviews/reviews.component';

type BenefitVariant = 'fill' | 'outline';
type StepIcon = 'search' | 'access' | 'learn';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ReviewsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
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

  ngOnInit(): void {
    // Component initialization logic here if needed
  }
}
