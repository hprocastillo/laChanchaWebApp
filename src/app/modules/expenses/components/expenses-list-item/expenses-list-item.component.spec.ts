import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesListItemComponent } from './expenses-list-item.component';

describe('ExpensesListItemComponent', () => {
  let component: ExpensesListItemComponent;
  let fixture: ComponentFixture<ExpensesListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesListItemComponent]
    });
    fixture = TestBed.createComponent(ExpensesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
