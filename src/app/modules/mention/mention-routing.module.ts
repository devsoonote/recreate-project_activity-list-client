import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionPageComponent } from './pages/mention-page/mention-page.component';

const routes: Routes = [
  { path: 'mention', component: MentionPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentionRoutingModule {}
