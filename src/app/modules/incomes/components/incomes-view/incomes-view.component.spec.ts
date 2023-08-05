import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesViewComponent } from './incomes-view.component';

describe('IncomesViewComponent', () => {
  let component: IncomesViewComponent;
  let fixture: ComponentFixture<IncomesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomesViewComponent]
    });
    fixture = TestBed.createComponent(IncomesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
