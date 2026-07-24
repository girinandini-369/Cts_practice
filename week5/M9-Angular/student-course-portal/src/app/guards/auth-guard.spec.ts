import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { vi } from 'vitest';
import { authGuard } from './auth-guard';
import { Auth } from '../services/auth';

describe('authGuard', () => {
  let authStub: { isLoggedIn: boolean };
  let routerMock: { navigate: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    authStub = { isLoggedIn: true };
    routerMock = { navigate: vi.fn() };

    TestBed.configureTestingModule({
      providers: [
        { provide: Auth, useValue: authStub },
        { provide: Router, useValue: routerMock },
      ],
    });
  });

  function runGuard() {
    return TestBed.runInInjectionContext(() =>
      authGuard({} as any, {} as any)
    );
  }

  it('should allow activation when logged in', () => {
    authStub.isLoggedIn = true;
    expect(runGuard()).toBe(true);
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should block activation and redirect home when logged out', () => {
    authStub.isLoggedIn = false;
    expect(runGuard()).toBe(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  });
});
