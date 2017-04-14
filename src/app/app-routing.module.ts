import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Index2Component} from "./index2/index2.component";
const routes: Routes = [
    {
        path: '',
        component: Index2Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
