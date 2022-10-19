import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';

describe('TestService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUserDetail: success', () => {

  });

  it('should call getUserDetail: error', () => {

  });

  it('should call addUser: success', () => {

  });

  it('should call addUser: error', () => {

  });

  it('should call updateUser: success', () => {

  });

  it('should call updateUser: error', () => {

  });

  it('should call deleteUser: success', () => {

  });

  it('should call deleteUser: error', () => {

  });
});
