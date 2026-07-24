import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let enrollmentServiceMock: {
    isEnrolled: ReturnType<typeof vi.fn>;
    enroll: ReturnType<typeof vi.fn>;
    unenroll: ReturnType<typeof vi.fn>;
  };

  const mockCourse: Course = { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' };

  beforeEach(async () => {
    enrollmentServiceMock = {
      isEnrolled: vi.fn(),
      enroll: vi.fn(),
      unenroll: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [{ provide: EnrollmentService, useValue: enrollmentServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = mockCourse;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the card--full class when credits >= 4', () => {
    fixture.detectChanges();
    expect(component.cardClasses['card--full']).toBe(true);
  });

  it('should render the course name in the template', () => {
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('Data Structures');
  });

  it('should toggle isExpanded when "Show Details" is clicked', () => {
    fixture.detectChanges();
    expect(component.isExpanded).toBe(false);
    component.toggleExpanded();
    expect(component.isExpanded).toBe(true);
  });

  it('should call enroll when not yet enrolled and toggleEnroll is called', () => {
    enrollmentServiceMock.isEnrolled.mockReturnValue(false);
    fixture.detectChanges();
    component.toggleEnroll();
    expect(enrollmentServiceMock.enroll).toHaveBeenCalledWith(1);
  });

  it('should call unenroll when already enrolled and toggleEnroll is called', () => {
    enrollmentServiceMock.isEnrolled.mockReturnValue(true);
    fixture.detectChanges();
    component.toggleEnroll();
    expect(enrollmentServiceMock.unenroll).toHaveBeenCalledWith(1);
  });
});
