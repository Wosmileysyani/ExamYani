import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './shared/component/content/content.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './home/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
