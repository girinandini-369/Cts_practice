import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabel } from '../../pipes/credit-label';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, Highlight, CreditLabel],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Previous course value:', changes['course'].previousValue);
      console.log('Current course value:', changes['course'].currentValue);
    }
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleEnroll(): void {
    this.isEnrolled = !this.isEnrolled;
    if (this.course?.id) {
      this.enrollRequested.emit(this.course.id);
    }
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      'expanded': this.isExpanded,
    };
  }

  get borderStyle() {
    let color = 'grey';
    if (this.course?.gradeStatus === 'passed') color = 'green';
    if (this.course?.gradeStatus === 'failed') color = 'red';
    return { 'border-left': '5px solid ' + color };
  }
}
