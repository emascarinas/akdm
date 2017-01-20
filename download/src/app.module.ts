//our root app component
import {Component, NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
	BrowserModule
	FormsModule,
	AppRoutingModule,
	HttpModule
	],
	declarations: [AppComponent, HeaderComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}