import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizQustionComponent } from './view-quiz-qustion.component';

describe('ViewQuizQustionComponent', () => {
  let component: ViewQuizQustionComponent;
  let fixture: ComponentFixture<ViewQuizQustionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuizQustionComponent]
    });
    fixture = TestBed.createComponent(ViewQuizQustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
