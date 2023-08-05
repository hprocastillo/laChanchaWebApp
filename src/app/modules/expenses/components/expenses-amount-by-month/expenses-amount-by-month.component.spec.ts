import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAmountByMonthComponent } from './expenses-amount-by-month.component';

describe('ExpensesAmountByMonthComponent', () => {
  let component: ExpensesAmountByMonthComponent;
  let fixture: ComponentFixture<ExpensesAmountByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesAmountByMonthComponent]
    });
    fixture = TestBed.createComponent(ExpensesAmountByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
