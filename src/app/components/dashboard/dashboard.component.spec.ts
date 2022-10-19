import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getDetails method', () => {

  });

  it('should call getUserDetail API inside getDetails method for success block', () => {

  });

  it('should call getUserDetail API inside getDetails method for error block', () => {

  });

  it('should check modalVal', () => {

  });

  it('should call addUser API inside submitUser method for success block', () => {

  });

  it('should call addUser API inside submitUser method for error block', () => {

  });
  
  it('should call deleteUser API inside deleteUser method for success block', () => {

  });

  it('should call deleteUser API inside deleteUser method for error block', () => {

  });
  
  it('should call redirectTo method', () => {

  });
});
