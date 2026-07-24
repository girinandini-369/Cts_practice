import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses = [
    { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Web Development', code: 'CS305', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 3, name: 'Database Systems', code: 'CS310', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 4, name: 'Operating Systems', code: 'CS320', credits: 4, gradeStatus: 'passed', enrolled: false },
    { id: 5, name: 'Computer Networks', code: 'CS330', credits: 3, gradeStatus: 'pending', enrolled: false },
  ];

  selectedCourseId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy lets Angular identify each list item by its unique id instead of
  // by its position in the array, so on array changes only the actually
  // changed items get re-rendered rather than the whole list being torn
  // down and rebuilt.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
