import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./pages/index.component";
import {SimpleComponent} from "./pages/tables/simple.component";
import {Dashboard2Component} from "./pages/dashboard2.component";
import {Dashboard1Component} from "./pages/dashboard1.component";
import {DataComponent} from "./pages/tables/data.component";
import {BoxedComponent} from "./pages/layout/boxed.component";
import {CollapsedSidebarComponent} from "./pages/layout/collapsed-sidebar.component";
import {FixedComponent} from "./pages/layout/fixed.component";
import {TopNavComponent} from "./pages/layout/top-nav.component";
import {WidgetsComponent} from "./pages/widgets.component";
import {ChartjsComponent} from "./pages/charts/chartjs.component";
import {FlotComponent} from "./pages/charts/flot.component";
import {InlineComponent} from "./pages/charts/inline.component";
import {MorrisComponent} from "./pages/charts/morris.component";
import {ButtonsComponent} from "./pages/ui/buttons.component";
import {GeneralComponent} from "./pages/ui/general.component";
import {IconsComponent} from "./pages/ui/icons.component";
import {ModalsComponent} from "./pages/ui/modals.component";
import {SlidersComponent} from "./pages/ui/sliders.component";
import {TimelineComponent} from "./pages/ui/timeline.component";
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
        path: 'layout/boxed',
        component: BoxedComponent
      },
      {
        path: 'layout/collapsed-sidebar',
        component: CollapsedSidebarComponent
      },
      {
        path: 'layout/fixed',
        component: FixedComponent
      },
      {
        path: 'layout/top-nav',
        component: TopNavComponent
      },
      {
        path: 'widgets',
        component: WidgetsComponent
      },
      {
        path: 'charts/chartjs',
        component: ChartjsComponent
      },
      {
        path: 'charts/flot',
        component: FlotComponent
      },
      {
        path: 'charts/inline',
        component: InlineComponent
      },
      {
        path: 'charts/morris',
        component: MorrisComponent
      },
      {
        path: 'ui/buttons',
        component: ButtonsComponent
      },
      {
        path: 'ui/general',
        component: GeneralComponent
      },
      {
        path: 'ui/icons',
        component: IconsComponent
      },
      {
        path: 'ui/modals',
        component: ModalsComponent
      },
      {
        path: 'ui/sliders',
        component: SlidersComponent
      },
      {
        path: 'ui/timeline',
        component: TimelineComponent
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
