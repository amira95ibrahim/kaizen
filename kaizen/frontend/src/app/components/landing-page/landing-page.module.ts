import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SubsrcibeComponent } from './subsrcibe/subsrcibe.component';
import { WhyUsComponent } from './why-us/why-us.component';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeroComponent,
    ContactUsComponent,
    AboutUsComponent,
    OurServicesComponent,
    SubsrcibeComponent,
    WhyUsComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [NavComponent,FooterComponent,HeroComponent,AboutUsComponent,ContactUsComponent,OurServicesComponent,SubsrcibeComponent,WhyUsComponent],
  providers: [],
  bootstrap: []
})
export class LandingPageModule { }
