import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { vi } from 'vitest';
import { EnrollmentService } from './enrollment';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let courseServiceMock: { getCourseById: ReturnType<typeof vi.fn> };

  const course1: Course = { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' };
  const course2: Course = { id: 2, name: 'Web Development', code: 'CS305', credits: 3, gradeStatus: 'pending' };

  beforeEach(() => {
    courseServiceMock = { getCourseById: vi.fn() };

    TestBed.configureTestingModule({
      providers: [
        EnrollmentService,
        { provide: CourseService, useValue: courseServiceMock },
      ],
    });

    service = TestBed.inject(EnrollmentService);
  });

  it('should enroll and mark a course as enrolled', () => {
    expect(service.isEnrolled(1)).toBe(false);
    service.enroll(1);
    expect(service.isEnrolled(1)).toBe(true);
  });

  it('should not duplicate an enrollment', () => {
    service.enroll(1);
    service.enroll(1);
    service.unenroll(1);
    expect(service.isEnrolled(1)).toBe(false);
  });

  it('should unenroll a course', () => {
    service.enroll(1);
    service.unenroll(1);
    expect(service.isEnrolled(1)).toBe(false);
  });

  it('should return an empty array when nothing is enrolled', async () => {
    const courses = await firstValueFrom(service.getEnrolledCourses());
    expect(courses).toEqual([]);
  });

  it('should fetch each enrolled course via forkJoin', async () => {
    courseServiceMock.getCourseById.mockImplementation((id: number) =>
      id === 1 ? of(course1) : of(course2)
    );

    service.enroll(1);
    service.enroll(2);

    const courses = await firstValueFrom(service.getEnrolledCourses());
    expect(courses.length).toBe(2);
    expect(courses).toContain(course1);
    expect(courses).toContain(course2);
  });
});
