import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CoursesActions } from '../../store/courses/courses.actions';
import {
  selectSelectedCourse,
  selectCoursesLoading,
  selectCoursesError,
} from '../../store/courses/courses.selectors';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  course$: Observable<Course | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private route: ActivatedRoute, private store: Store) {
    this.course$ = this.store.select(selectSelectedCourse);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(CoursesActions.loadCourseById({ id }));
  }
}
