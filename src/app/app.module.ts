import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SharedModule } from './modules/shared/shared.module';
import { ColorScaleBarComponent } from './modules/visualizations/color-scale-bar/color-scale-bar.component';
import { NgColorScaleModule } from 'ng-color-scale';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    TopBarComponent,
    ColorScaleBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgColorScaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
