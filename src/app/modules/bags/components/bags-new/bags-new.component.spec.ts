import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsNewComponent } from './bags-new.component';

describe('BagsNewComponent', () => {
  let component: BagsNewComponent;
  let fixture: ComponentFixture<BagsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagsNewComponent]
    });
    fixture = TestBed.createComponent(BagsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
