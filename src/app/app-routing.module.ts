import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path: '', component: HomeComponent 
  },
  { 
    path:'all-products', loadChildren: () => import("./all-products/all-products.module").then(m=>m.AllProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
