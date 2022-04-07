import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActivityPageComponent} from "./pages/activity-page/activity-page.component";

const routes: Routes = [
  {
    path: 'activity', component: ActivityPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule { }
