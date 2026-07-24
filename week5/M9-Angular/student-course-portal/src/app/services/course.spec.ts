import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;
  const API_URL = 'http://localhost:3000/courses';

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Web Development', code: 'CS305', credits: 3, gradeStatus: 'pending' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses via GET', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should filter out courses with 0 credits', () => {
    const withZero = [...mockCourses, { id: 3, name: 'Seminar', code: 'CS000', credits: 0, gradeStatus: 'pending' as const }];

    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
    });

    const req = httpMock.expectOne(API_URL);
    req.flush(withZero);
  });

  it('should fetch a single course by id', () => {
    service.getCourseById(1).subscribe((course) => {
      expect(course).toEqual(mockCourses[0]);
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses[0]);
  });

  it('should propagate an error message on failure', () => {
    service.getCourses().subscribe({
      next: () => { throw new Error('expected an error, not a success'); },
      error: (err) => expect(err.message).toBe('Failed to load courses. Please try again.'),
    });

    const reqs = httpMock.match(API_URL);
    reqs.forEach((r) => r.flush('server error', { status: 500, statusText: 'Server Error' }));
  });
});
