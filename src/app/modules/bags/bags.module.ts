import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagsRoutingModule } from './bags-routing.module';
import { BagsComponent } from './components/bags/bags.component';
import { BagsListComponent } from './components/bags-list/bags-list.component';
import { BagsListItemComponent } from './components/bags-list-item/bags-list-item.component';
import { BagsNewComponent } from './components/bags-new/bags-new.component';
import { BagsEditComponent } from './components/bags-edit/bags-edit.component';
import { BagsViewComponent } from './components/bags-view/bags-view.component';


@NgModule({
  declarations: [
    BagsComponent,
    BagsListComponent,
    BagsListItemComponent,
    BagsNewComponent,
    BagsEditComponent,
    BagsViewComponent
  ],
  imports: [
    CommonModule,
    BagsRoutingModule
  ]
})
export class BagsModule { }
