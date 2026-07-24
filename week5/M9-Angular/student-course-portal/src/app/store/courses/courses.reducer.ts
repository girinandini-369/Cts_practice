import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { CoursesActions } from './courses.actions';

export interface CoursesState {
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CoursesState = {
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null,
};

export const coursesReducer = createReducer(
  initialState,

  on(CoursesActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
  })),
  on(CoursesActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CoursesActions.loadCourseById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CoursesActions.loadCourseByIdSuccess, (state, { course }) => ({
    ...state,
    selectedCourse: course,
    loading: false,
  })),
  on(CoursesActions.loadCourseByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
