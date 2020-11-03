import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReferedComponent } from './new-refered.component';

describe('NewReferedComponent', () => {
  let component: NewReferedComponent;
  let fixture: ComponentFixture<NewReferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
