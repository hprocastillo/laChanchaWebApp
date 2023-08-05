import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesEditComponent } from './incomes-edit.component';

describe('IncomesEditComponent', () => {
  let component: IncomesEditComponent;
  let fixture: ComponentFixture<IncomesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomesEditComponent]
    });
    fixture = TestBed.createComponent(IncomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
