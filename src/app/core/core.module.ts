import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './components/container/container.component';
import { ContentsComponent } from './components/contents/contents.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
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
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
