import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from "@shared/shared.module";
import {ActivityModule} from "@activity/activity.module";
import {MentionModule} from "@mention/mention.module";
@NgModule({
  imports: [
    SharedModule,
    ActivityModule,
    MentionModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
