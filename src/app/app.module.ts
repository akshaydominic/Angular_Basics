import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeModuleComponent } from './time-module/time-module.component';
import { ViewModuleModule } from './view-module/view-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TimeModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
