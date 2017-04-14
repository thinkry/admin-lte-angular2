import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './header.component';
import {LeftSideBarComponent} from './left-side-bar.component';
import {RightSideBarComponent} from './right-side-bar.component';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule  // 要引入RouterModule，才能让本Module的组件有routerLink功能
  ],
  declarations: [HeaderComponent, LeftSideBarComponent, RightSideBarComponent, FooterComponent],
  exports: [HeaderComponent, LeftSideBarComponent, RightSideBarComponent, FooterComponent]
})
export class PublicModule {
}
