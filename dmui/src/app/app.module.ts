import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
