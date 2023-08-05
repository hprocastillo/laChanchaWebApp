import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesNewComponent } from './incomes-new.component';

describe('IncomesNewComponent', () => {
  let component: IncomesNewComponent;
  let fixture: ComponentFixture<IncomesNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomesNewComponent]
    });
    fixture = TestBed.createComponent(IncomesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
