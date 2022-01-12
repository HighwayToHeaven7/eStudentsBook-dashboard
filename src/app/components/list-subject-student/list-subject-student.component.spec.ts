import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectStudentComponent } from './list-subject-student.component';

describe('ListSubjectStudentComponent', () => {
  let component: ListSubjectStudentComponent;
  let fixture: ComponentFixture<ListSubjectStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubjectStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubjectStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
