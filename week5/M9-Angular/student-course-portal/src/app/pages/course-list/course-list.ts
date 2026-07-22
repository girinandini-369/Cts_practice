import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = [
    { id: 1, name: 'Data Structures', code: 'CS201', credits: 4 },
    { id: 2, name: 'Web Development', code: 'CS305', credits: 3 },
    { id: 3, name: 'Database Systems', code: 'CS310', credits: 3 },
    { id: 4, name: 'Operating Systems', code: 'CS320', credits: 4 },
    { id: 5, name: 'Computer Networks', code: 'CS330', credits: 3 },
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
