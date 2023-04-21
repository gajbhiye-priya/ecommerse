import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart } from 'src/app/data.type';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
removeCarts=false
  quantity: number = 1
  detailPage: any = []
  constructor(private activateRoute: ActivatedRoute, private productt: ProductService) { }


  ngOnInit(): void {
    let pageId: any = this.activateRoute.snapshot.paramMap.get('productId')
    console.log("Page Id", pageId)
    this.productt.getProductById(pageId).subscribe((result) => {
      console.log("succesfully showing detail page", result)
      this.detailPage = result
// debugger
      let localStoreData = localStorage.getItem('localcart')
      console.log("localStoreData", localStoreData)
      if (pageId && localStoreData) {
        let items = JSON.parse(localStoreData);
        items = items.filter((item:any)=> pageId===item.id.toString())
        console.log("items",items)
        if(items.length){
          this.removeCarts=true;
        }else{
          this.removeCarts=false;
        }
        
      }
    })

  }


  handleQuanty(val: string) {
    if (this.quantity < 20 && val === 'plus') {
      this.quantity = this.quantity + 1
    }
    else if (this.quantity > 1 && val === 'min') {
      this.quantity = this.quantity - 1
    }
  }


  addToCart() {
    if (this.detailPage) {
      this.detailPage.quantity = this.quantity;
      console.log("add to cart quantity", this.detailPage)
      if (!localStorage.getItem('user')) {
        this.productt.localAddtocart(this.detailPage)
        this.removeCarts=true;
      } else{
              let user =localStorage.getItem('user')  
              if(user){
                console.log("User login",user)
              }

              let userId= user && JSON.parse(user).id
              console.log("userId",userId)

              let cartData:cart={
                ...this.detailPage,userId
              }
        console.log("carddata details",cartData)

      }

    }
  }

  removeCart(productId:number){
this.productt.removeAddtocart(productId)
this.removeCarts=false;

  }

}

