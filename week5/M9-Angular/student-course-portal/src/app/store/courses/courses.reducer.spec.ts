import { coursesReducer, initialState } from './courses.reducer';
import { CoursesActions } from './courses.actions';
import { Course } from '../../models/course.model';

describe('coursesReducer', () => {
  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' },
  ];

  it('should return the initial state for an unknown action', () => {
    const state = coursesReducer(undefined, { type: 'unknown' } as any);
    expect(state).toEqual(initialState);
  });

  it('should set loading true on loadCourses', () => {
    const state = coursesReducer(initialState, CoursesActions.loadCourses());
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should populate courses and clear loading on loadCoursesSuccess', () => {
    const loadingState = { ...initialState, loading: true };
    const state = coursesReducer(loadingState, CoursesActions.loadCoursesSuccess({ courses: mockCourses }));
    expect(state.courses).toEqual(mockCourses);
    expect(state.loading).toBe(false);
  });

  it('should set the error and clear loading on loadCoursesFailure', () => {
    const loadingState = { ...initialState, loading: true };
    const state = coursesReducer(loadingState, CoursesActions.loadCoursesFailure({ error: 'Boom' }));
    expect(state.error).toBe('Boom');
    expect(state.loading).toBe(false);
  });

  it('should set the selectedCourse on loadCourseByIdSuccess', () => {
    const state = coursesReducer(initialState, CoursesActions.loadCourseByIdSuccess({ course: mockCourses[0] }));
    expect(state.selectedCourse).toEqual(mockCourses[0]);
  });
});
