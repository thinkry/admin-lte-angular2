import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiRoutingModule} from './ui-routing.module';

import {ButtonsComponent} from './buttons.component';
import {GeneralComponent} from './general.component';
import {IconsComponent} from './icons.component';
import {ModalsComponent} from './modals.component';
import {SlidersComponent} from './sliders.component';
import {TimelineComponent} from './timeline.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [
    ButtonsComponent,
    GeneralComponent,
    IconsComponent,
    ModalsComponent,
    SlidersComponent,
    TimelineComponent
  ]
})
export class UiModule {
}
