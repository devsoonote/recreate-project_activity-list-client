import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentsComponent } from './components/contents/contents.component';

@NgModule({
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentsComponent
  ],

  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentsComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
