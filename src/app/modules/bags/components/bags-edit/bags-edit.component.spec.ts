import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsEditComponent } from './bags-edit.component';

describe('BagsEditComponent', () => {
  let component: BagsEditComponent;
  let fixture: ComponentFixture<BagsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagsEditComponent]
    });
    fixture = TestBed.createComponent(BagsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
