import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

export const CoursesActions = createActionGroup({
  source: 'Courses',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ courses: Course[] }>(),
    'Load Courses Failure': props<{ error: string }>(),

    'Load Course By Id': props<{ id: number }>(),
    'Load Course By Id Success': props<{ course: Course }>(),
    'Load Course By Id Failure': props<{ error: string }>(),
  },
});
