import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { productObject } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData= new EventEmitter

  constructor(private http: HttpClient) { }


  // addProductData(payload:productObject){ 
  // console.log(" product service is working")
  //   return this.http.post('http://localhost:3000/product',payload)
  // }

  addProductData(payload: productObject) {
    console.log(" product service is working")
    return this.http.post('http://localhost:3000/product', payload)
  }

  getAll() {
    return this.http.get('http://localhost:3000/product')

  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }

getProductById(id:string){
  return this.http.get(`http://localhost:3000/product/${id}`)

}

updateProduct(id:number, payload:any){
  return this.http.put(`http://localhost:3000/product/${id}`,payload)
}

trendingProduct(){
 return this.http.get('http://localhost:3000/product?_limit=8');

}

searchProduct(query:any){
  return this.http.get(`http://localhost:3000/product?q=${query}`)
}


searchDetail(id:number){

}


localAddtocart(data:any){
  let cartData=[]

  let localcart= localStorage.getItem('localcart')
  console.log("localcart",localcart)
  if(!localcart){
 localStorage.setItem('localcart',JSON.stringify([data]));
  }
  else{
    cartData= JSON.parse(localcart);
    cartData.push(data)
    localStorage.setItem('localcart', JSON.stringify(cartData))
    console.log("cartData",cartData)  
    this.cartData.emit(cartData)
    
  }
}

removeAddtocart(productid:number){
  
  let cartData=localStorage.getItem('localcart')
  if(cartData){
   let items= JSON.parse(cartData)
   items=items.filter((item:any)=>productid!==item.id)
   localStorage.setItem('localcart',JSON.stringify(items))
   this.cartData.emit(items)
    
   }

  }
}




