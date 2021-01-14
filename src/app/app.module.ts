import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/user/header/components/header/header.component';
import { FooterComponent } from './modules/user/footer/components/footer/footer.component';
import { CartComponent } from './modules/user/shoppingcart/components/cart/cart.component';
import { SearchbarComponent } from './modules/user/search/components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
