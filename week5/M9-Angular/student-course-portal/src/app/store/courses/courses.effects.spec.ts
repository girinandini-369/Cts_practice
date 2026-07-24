import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { firstValueFrom, Observable, of, throwError } from 'rxjs';
import { vi } from 'vitest';
import { CoursesEffects } from './courses.effects';
import { CoursesActions } from './courses.actions';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

describe('CoursesEffects', () => {
  let effects: CoursesEffects;
  let actions$: Observable<any>;
  let courseServiceMock: { getCourses: ReturnType<typeof vi.fn>; getCourseById: ReturnType<typeof vi.fn> };

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' },
  ];

  beforeEach(() => {
    courseServiceMock = { getCourses: vi.fn(), getCourseById: vi.fn() };

    TestBed.configureTestingModule({
      providers: [
        CoursesEffects,
        provideMockActions(() => actions$),
        { provide: CourseService, useValue: courseServiceMock },
      ],
    });

    effects = TestBed.inject(CoursesEffects);
  });

  it('should dispatch loadCoursesSuccess on successful fetch', async () => {
    courseServiceMock.getCourses.mockReturnValue(of(mockCourses));
    actions$ = of(CoursesActions.loadCourses());

    const action = await firstValueFrom(effects.loadCourses$);
    expect(action).toEqual(CoursesActions.loadCoursesSuccess({ courses: mockCourses }));
  });

  it('should dispatch loadCoursesFailure on error', async () => {
    courseServiceMock.getCourses.mockReturnValue(throwError(() => new Error('Network error')));
    actions$ = of(CoursesActions.loadCourses());

    const action = await firstValueFrom(effects.loadCourses$);
    expect(action).toEqual(CoursesActions.loadCoursesFailure({ error: 'Network error' }));
  });

  it('should dispatch loadCourseByIdSuccess on successful fetch', async () => {
    courseServiceMock.getCourseById.mockReturnValue(of(mockCourses[0]));
    actions$ = of(CoursesActions.loadCourseById({ id: 1 }));

    const action = await firstValueFrom(effects.loadCourseById$);
    expect(action).toEqual(CoursesActions.loadCourseByIdSuccess({ course: mockCourses[0] }));
  });
});
