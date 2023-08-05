import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsListItemComponent } from './bags-list-item.component';

describe('BagsListItemComponent', () => {
  let component: BagsListItemComponent;
  let fixture: ComponentFixture<BagsListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagsListItemComponent]
    });
    fixture = TestBed.createComponent(BagsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
