import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent implements OnInit {
 
  // currentItem = 'Television';
  isLoading=false
  deleteMessage:string=""
  getData:any=[]
 icon=faTrash;
 iconEdit=faEdit;

constructor(private products:ProductService){}
  ngOnInit(): void {
    this.isLoading=true;
    this.products.getAll().subscribe((result)=>{
      console.log("get all list",result)
      this.getData=result
      this.isLoading=false;
    })
    throw new Error('Method not implemented.');
  }


  deleteProduct(id:number){
    console.log("delete product",id)
    this.isLoading=true;
    this.products.deleteProduct(id).subscribe((result)=>{
      console.log("delete product",result)
      this.isLoading=false;
      if(result){
        this.deleteMessage="Product deleted succesfully "
      }
    },(error:Error)=>{
      console.log("Something went wrong",error)
    }
    )
  }


  addItem(value: string) {
    
    console.log("display parent",value)
  }
}

