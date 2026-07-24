import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { CourseService } from '../../services/course';
import { CoursesActions } from './courses.actions';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      switchMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => CoursesActions.loadCoursesSuccess({ courses })),
          catchError((error) =>
            of(CoursesActions.loadCoursesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadCourseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadCourseById),
      switchMap(({ id }) =>
        this.courseService.getCourseById(id).pipe(
          map((course) => CoursesActions.loadCourseByIdSuccess({ course })),
          catchError((error) =>
            of(CoursesActions.loadCourseByIdFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}
