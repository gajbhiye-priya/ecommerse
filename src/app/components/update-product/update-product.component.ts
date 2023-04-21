import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
 
data:any =[]


constructor(private route:ActivatedRoute, private productt:ProductService, private router:Router){}

  ngOnInit(): void {

    let productId= this.route.snapshot.paramMap.get('id')
    console.log("productId", productId)
    productId && this.productt.getProductById(productId).subscribe((result)=>{
    console.log("result",result)
      this.data=result
    }
    )
    throw new Error('Method not implemented.');
  }

  
  updateProduct(productId:number){
 
this.router.navigate(['/seller-product-list',productId])

  }

}
