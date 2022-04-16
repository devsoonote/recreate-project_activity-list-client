import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './components/container/container.component';
import { ContentsComponent } from './components/contents/contents.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContentsComponent,
    ContainerComponent,
  ],

  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentsComponent,
    ContainerComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, MatProgressSpinnerModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
