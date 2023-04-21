import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { SellerService } from './service/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthGuard } from './guard/auth.guard';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './components/seller-product-list/seller-product-list.component';
import { ProductService } from './service/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { SearchComponent } from './components/search/search.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAuthService } from './service/user-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    UpdateProductComponent,
    SearchComponent,
    DetailPageComponent,
    UserAuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    SellerService,
    ProductService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
