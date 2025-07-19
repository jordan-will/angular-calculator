import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalc } from './input-calc';

describe('InputCalc', () => {
  let component: InputCalc;
  let fixture: ComponentFixture<InputCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
