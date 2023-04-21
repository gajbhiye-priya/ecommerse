import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerProductListComponent } from './components/seller-product-list/seller-product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { AuthGuard } from './guard/auth.guard';
import { FormsModule }   from '@angular/forms';


const routes: Routes = [

  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home',component:SellerHomeComponent, canActivate:[AuthGuard] },
  {path:'seller-add-product', component:SellerAddProductComponent},
  {path:'seller-product-list', component:SellerProductListComponent},
  {path:'update-product/:id', component:UpdateProductComponent},
  {path:'search/:query', component:SearchComponent},
  {path:'detail-page/:productId', component:DetailPageComponent},
  {path:'user-auth', component:UserAuthComponent},
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
