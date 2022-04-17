import { RouterModule, Routes } from '@angular/router';
import { ActivityModule } from './modules/activity/activity.module';
import { AppComponent } from './app.component';
import { MentionModule } from './modules/mention/mention.module';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'activity', loadChildren: () => ActivityModule },
  { path: 'mention', loadChildren: () => MentionModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
