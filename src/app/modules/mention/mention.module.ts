import { NgModule } from '@angular/core';
import { MentionPageComponent } from './pages/mention-page/mention-page.component';
import {MentionRoutingModule} from "./mention-routing.module";

@NgModule({
  declarations: [
    MentionPageComponent
  ],
  imports: [
    MentionRoutingModule
  ],
  exports: [
    MentionRoutingModule
  ],
})
export class MentionModule { }
