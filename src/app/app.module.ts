import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './home/home-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { InvestmentComponent } from './investment/investment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    HomeComponent,
    NgbdCarouselConfig,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    ResearchComponent,
    InvestmentComponent,
    CalculatorComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ModalService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
