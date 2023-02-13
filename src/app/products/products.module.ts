import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllProductsComponent} from './components/all-products/all-products.component';
import {ProductsDetailsComponent} from './components/products-details/products-details.component';
import {SharedModule} from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ProductsModule { }
