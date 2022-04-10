import { NgModule } from '@angular/core';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { ActivityRoutingModule } from './activity.routing.module';

@NgModule({
  declarations: [ActivityPageComponent],
  imports: [ActivityRoutingModule],
  exports: [ActivityRoutingModule],
})
export class ActivityModule {}
