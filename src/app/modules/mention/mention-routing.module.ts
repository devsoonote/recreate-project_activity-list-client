import { RouterModule, Routes } from '@angular/router';
import { MentionPageComponent } from './pages/mention-page/mention-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MentionPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentionRoutingModule {}
