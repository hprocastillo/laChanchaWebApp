import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsViewComponent } from './bags-view.component';

describe('BagsViewComponent', () => {
  let component: BagsViewComponent;
  let fixture: ComponentFixture<BagsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagsViewComponent]
    });
    fixture = TestBed.createComponent(BagsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
