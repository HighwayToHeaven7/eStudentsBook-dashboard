import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubjectCardComponent } from './new-subject-card.component';

describe('NewSubjectCardComponent', () => {
  let component: NewSubjectCardComponent;
  let fixture: ComponentFixture<NewSubjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
