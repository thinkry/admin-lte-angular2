import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {PublicModule} from "./public/public.module";

import {AppComponent} from './app.component';
import {IndexComponent} from './pages/index.component';
import {SimpleComponent} from './pages/tables/simple.component';
import {Dashboard2Component} from './pages/dashboard2.component';
import { Dashboard1Component } from './pages/dashboard1.component';
import { DataComponent } from './pages/tables/data.component';
import { BoxedComponent } from './pages/layout/boxed.component';
import { CollapsedSidebarComponent } from './pages/layout/collapsed-sidebar.component';
import { FixedComponent } from './pages/layout/fixed.component';
import { TopNavComponent } from './pages/layout/top-nav.component';
import { WidgetsComponent } from './pages/widgets.component';
import { ChartjsComponent } from './pages/charts/chartjs.component';
import { FlotComponent } from './pages/charts/flot.component';
import { InlineComponent } from './pages/charts/inline.component';
import { MorrisComponent } from './pages/charts/morris.component';
import { ButtonsComponent } from './pages/ui/buttons.component';
import { GeneralComponent } from './pages/ui/general.component';
import { IconsComponent } from './pages/ui/icons.component';
import { ModalsComponent } from './pages/ui/modals.component';
import { SlidersComponent } from './pages/ui/sliders.component';
import { TimelineComponent } from './pages/ui/timeline.component';
import { AdvancedComponent } from './pages/forms/advanced.component';
import { EditorsComponent } from './pages/forms/editors.component';
import { GeneralComponent as FormGeneralComponent } from './pages/forms/general.component';
import { CalendarComponent } from './pages/calendar.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { ComposeComponent } from './pages/mailbox/compose.component';
import { ReadMailComponent } from './pages/mailbox/read-mail.component';
import { E404Component } from './pages/examples/e404.component';
import { E500Component } from './pages/examples/e500.component';
import { BlankComponent } from './pages/examples/blank.component';
import { InvoicePrintComponent } from './pages/examples/invoice-print.component';
import { InvoiceComponent } from './pages/examples/invoice.component';
import { LockscreenComponent } from './pages/examples/lockscreen.component';
import { LoginComponent } from './pages/examples/login.component';
import { PaceComponent } from './pages/examples/pace.component';
import { ProfileComponent } from './pages/examples/profile.component';
import { RegisterComponent } from './pages/examples/register.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SimpleComponent,
    Dashboard2Component,
    Dashboard1Component,
    DataComponent,
    BoxedComponent,
    CollapsedSidebarComponent,
    FixedComponent,
    TopNavComponent,
    WidgetsComponent,
    ChartjsComponent,
    FlotComponent,
    InlineComponent,
    MorrisComponent,
    ButtonsComponent,
    GeneralComponent,
    IconsComponent,
    ModalsComponent,
    SlidersComponent,
    TimelineComponent,
    AdvancedComponent,
    EditorsComponent,
    FormGeneralComponent,
    CalendarComponent,
    MailboxComponent,
    ComposeComponent,
    ReadMailComponent,
    E404Component,
    E500Component,
    BlankComponent,
    InvoicePrintComponent,
    InvoiceComponent,
    LockscreenComponent,
    LoginComponent,
    PaceComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
