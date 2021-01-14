import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './modules/user/homepage-content/components/homepage/homepage.component'
import { ProductViewComponent } from './modules/user/product_view/components/product-view/product-view.component'
import { ProductsviewComponent } from './modules/user/products_view/components/productsview/productsview.component'
import { CartviewComponent } from './modules/user/shoppingcart/components/cartview/cartview.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent, },
  { path: '*', component: HomepageComponent, },
  { path: 'product/:id', component: ProductViewComponent, },
  { path: 'search/:query', component: ProductsviewComponent, },
  { path: 'cart', component: CartviewComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
