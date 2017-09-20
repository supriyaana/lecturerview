import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerinfoComponent } from './lecturerinfo.component';

describe('LecturerinfoComponent', () => {
  let component: LecturerinfoComponent;
  let fixture: ComponentFixture<LecturerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
