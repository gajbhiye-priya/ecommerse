import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
  outputs:['newProduct']
})
export class SellerAddProductComponent {

  message:string="show child component"
  
 newProduct = new EventEmitter<string>();

  @Output() onChange = new EventEmitter()

  // @Input() item: string | undefined;


productMessage:string=""

  product:any={
    productName:'',
    price:'',
    ProductCategory:'',
    description:'',
    imageUrl:'',  
    quantity:0,  
  }

name=''

constructor(private productt:ProductService, private http:HttpClient, private router:Router){}


  // addProduct(){
  // this.productt.addProductData(this.product).subscribe((result:any)=>{
  //   console.log("Api json",result)
  // })
  // }


  addProduct(){
    
  // this.productt.addProductData(this.product).subscribe((result:any)=>{
  //   console.log("Api json",result)

  //   if(result){
  //  this.productMessage="Product data added sucessfully"
  //  this.router.navigate(['seller-product-list'])
  //   }
  // })
console.log("add product working")
  this.newProduct.emit("child component transfer data");
  
  // this.router.navigate(['seller-product-list'])    
  }
}
