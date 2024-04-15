import { TestBed } from '@angular/core/testing';

import { TaskservService } from './taskserv.service';

describe('TaskservService', () => {
  let service: TaskservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
