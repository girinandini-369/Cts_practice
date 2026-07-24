import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesActions } from '../../store/courses/courses.actions';
import { selectCoursesCount } from '../../store/courses/courses.selectors';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable$: Observable<number>;

  constructor(private store: Store) {
    this.coursesAvailable$ = this.store.select(selectCoursesCount);
  }

  ngOnInit() {
    this.store.dispatch(CoursesActions.loadCourses());
    console.log('HomeComponent initialised — dispatched loadCourses');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}
