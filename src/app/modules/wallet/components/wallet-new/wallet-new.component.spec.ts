import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletNewComponent } from './wallet-new.component';

describe('WalletNewComponent', () => {
  let component: WalletNewComponent;
  let fixture: ComponentFixture<WalletNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletNewComponent]
    });
    fixture = TestBed.createComponent(WalletNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
