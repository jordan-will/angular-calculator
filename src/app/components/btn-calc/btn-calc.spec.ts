import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCalc } from './btn-calc';

describe('BtnCalc', () => {
  let component: BtnCalc;
  let fixture: ComponentFixture<BtnCalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
