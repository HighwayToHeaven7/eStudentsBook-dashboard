import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProfessorsComponent } from './list-of-professors.component';

describe('ListOfProfessorsComponent', () => {
  let component: ListOfProfessorsComponent;
  let fixture: ComponentFixture<ListOfProfessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfProfessorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
