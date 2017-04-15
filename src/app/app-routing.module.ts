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
import {AdvancedComponent} from "./pages/forms/advanced.component";
import {EditorsComponent} from "./pages/forms/editors.component";
import {GeneralComponent as FormGeneralComponent} from './pages/forms/general.component';
import {CalendarComponent} from "./pages/calendar.component";
import {MailboxComponent} from "./pages/mailbox/mailbox.component";
import {ComposeComponent} from "./pages/mailbox/compose.component";
import {ReadMailComponent} from "./pages/mailbox/read-mail.component";
import {E404Component} from "./pages/examples/e404.component";
import {E500Component} from "./pages/examples/e500.component";
import {BlankComponent} from "./pages/examples/blank.component";
import {InvoiceComponent} from "./pages/examples/invoice.component";
import {InvoicePrintComponent} from "./pages/examples/invoice-print.component";
import {LockscreenComponent} from "./pages/examples/lockscreen.component";
import {LoginComponent} from "./pages/examples/login.component";
import {RegisterComponent} from "./pages/examples/register.component";
import {PaceComponent} from "./pages/examples/pace.component";
import {ProfileComponent} from "./pages/examples/profile.component";

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
        path: 'ui',
        loadChildren: './ui/ui.module#UiModule'
      },
      {
        path: 'forms/advanced',
        component: AdvancedComponent
      },
      {
        path: 'forms/editors',
        component: EditorsComponent
      },
      {
        path: 'forms/general',
        component: FormGeneralComponent
      },
      {
        path: 'tables/simple',
        component: SimpleComponent
      },
      {
        path: 'tables/data',
        component: DataComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'mailbox/mailbox',
        component: MailboxComponent
      },
      {
        path: 'mailbox/compose',
        component: ComposeComponent
      },
      {
        path: 'mailbox/read-mail',
        component: ReadMailComponent
      },
      {
        path: 'examples/e404',
        component: E404Component
      },
      {
        path: 'examples/e500',
        component: E500Component
      },
      {
        path: 'examples/blank',
        component: BlankComponent
      },
      {
        path: 'examples/invoice',
        component: InvoiceComponent
      },
      {
        path: 'examples/pace',
        component: PaceComponent
      },
      {
        path: 'examples/profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'examples/invoice-print',
    component: InvoicePrintComponent
  },
  {
    path: 'examples/lockscreen',
    component: LockscreenComponent
  },
  {
    path: 'examples/login',
    component: LoginComponent
  },
  {
    path: 'examples/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
