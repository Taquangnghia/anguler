import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';
import { TenSvComponent } from './ten-sv/ten-sv.component';
import { IndentityComponent } from './indentity/indentity.component';
import { DameComponent } from './dame/dame.component';
import { AvataComponent } from './avata/avata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameComponent,
    TenSvComponent,
    IndentityComponent,
    DameComponent,
    AvataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
