import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/user/header/components/header/header.component';
import { FooterComponent } from './modules/user/footer/components/footer/footer.component';
import { SearchbarComponent } from './modules/user/search/components/searchbar/searchbar.component';
import { UserComponent } from './modules/user/user/components/user/user.component';
import { HomepageComponent } from './modules/user/homepage-content/components/homepage/homepage.component';
import { ProductsviewComponent } from './modules/user/products_view/components/productsview/productsview.component';
import { ProductViewComponent } from './modules/user/product_view/components/product-view/product-view.component';
import { CartviewComponent } from './modules/user/shoppingcart/components/cartview/cartview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    UserComponent,
    HomepageComponent,
    ProductsviewComponent,
    ProductViewComponent,
    CartviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
