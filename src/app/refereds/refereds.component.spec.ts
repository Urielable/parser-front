import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferedsComponent } from './refereds.component';

describe('ReferedsComponent', () => {
  let component: ReferedsComponent;
  let fixture: ComponentFixture<ReferedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
