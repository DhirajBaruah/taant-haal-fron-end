import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';


const allProductsRoutes: Routes = [
 
      { 
        path:'', children: [
          { 
            path:'', component: AllProductsComponent 
          }
        ]
      }

];

@NgModule({
  imports: [RouterModule.forChild(allProductsRoutes)],
  exports: [RouterModule]
})
export class AllProductsRoutingModule { }
