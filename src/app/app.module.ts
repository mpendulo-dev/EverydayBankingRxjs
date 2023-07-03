import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentAComponent,
    ComponentBComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
