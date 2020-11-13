import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllProductsRoutingModule } from './all-products-routing.module';



@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    AllProductsRoutingModule
  ],
  exports: [AllProductsComponent]
})
export class AllProductsModule { }
