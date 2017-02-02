//our root app component
import {Component, NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ShoutComponent } from './shout/shout.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
	imports: [
	BrowserModule
	FormsModule,
	AppRoutingModule,
	HttpModule
	],
	declarations: [AppComponent, HeaderComponent, HeroComponent, ShoutComponent, ActivityComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}