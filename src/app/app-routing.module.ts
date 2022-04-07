import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'activity', loadChildren: () => import('./activity/activity.module').then((m) => m.ActivityModule)},
  {path: 'mention', loadChildren: () => import('./mention/mention.module').then((m) => m.MentionModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
