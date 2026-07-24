import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course: Course | undefined;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: course => (this.course = course),
      error: err => (this.errorMessage = err.message),
    });
  }
}
