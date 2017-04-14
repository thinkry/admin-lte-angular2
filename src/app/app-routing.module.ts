import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./pages/index.component";
import {SimpleComponent} from "./pages/tables/simple.component";
import {Dashboard2Component} from "./pages/dashboard2.component";
import {Dashboard1Component} from "./pages/dashboard1.component";
import {DataComponent} from "./pages/tables/data.component";
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: Dashboard2Component
      },
      {
        path: 'dashboard1',
        component: Dashboard1Component
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component
      },
      {
        path: 'tables/simple',
        component: SimpleComponent
      },
      {
        path: 'tables/data',
        component: DataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
