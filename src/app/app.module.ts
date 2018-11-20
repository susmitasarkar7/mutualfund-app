import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './fundcarousel/fundcarousel-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FundcarouselComponent } from './fundcarousel/fundcarousel.component';
import { FundLoginComponent } from './fundcarousel/fund-login/fund-login.component';
import { FundInfoComponent } from './fundcarousel/fund-info/fund-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FundcarouselComponent,
    FundLoginComponent,
    FundInfoComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
