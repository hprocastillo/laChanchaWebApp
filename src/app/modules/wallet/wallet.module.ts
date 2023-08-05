import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletNewComponent } from './components/wallet-new/wallet-new.component';
import { WalletEditComponent } from './components/wallet-edit/wallet-edit.component';
import { WalletViewComponent } from './components/wallet-view/wallet-view.component';


@NgModule({
  declarations: [
    WalletComponent,
    WalletNewComponent,
    WalletEditComponent,
    WalletViewComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
