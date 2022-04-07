import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MentionPageComponent} from "./pages/mention-page/mention-page.component";

const routes: Routes = [
  { path: '', component: MentionPageComponent}
];

@NgModule({
  imports: [],
  exports: []
})
export class MentionRoutingModule {}
