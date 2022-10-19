import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUserDetail API inside getUserDetails method', () => {

  });

  it('should call resetForm method', () => {

  });

  it('should call redirectTo method', () => {

  });

  it('should call updateUser API inside submit method for success block', () => {

  });

});
