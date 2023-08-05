import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesListItemComponent } from './incomes-list-item.component';

describe('IncomesListItemComponent', () => {
  let component: IncomesListItemComponent;
  let fixture: ComponentFixture<IncomesListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomesListItemComponent]
    });
    fixture = TestBed.createComponent(IncomesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
