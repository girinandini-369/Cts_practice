import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  const mockCourse: Course = { id: 1, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'passed' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
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

  it('should toggle isEnrolled and emit course ID when toggleEnroll is called', () => {
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');
    
    expect(component.isEnrolled).toBe(false);
    component.toggleEnroll();
    
    expect(component.isEnrolled).toBe(true);
    expect(emitSpy).toHaveBeenCalledWith(1);
  });
});

