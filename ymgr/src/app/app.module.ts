import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdSidenavModule} from '@angular/material';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    CoreModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
