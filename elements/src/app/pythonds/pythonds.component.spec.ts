import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythondsComponent } from './pythonds.component';

describe('PythondsComponent', () => {
  let component: PythondsComponent;
  let fixture: ComponentFixture<PythondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
