import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sellerName: string = ""
  userNames: string = ''
  menuType: string = 'default'
  searchPro: any = []
  valu: any = []
  seller: any = []
  cartItem: number = 0

  constructor(private router: Router, private productt: ProductService) { }
  ngOnInit(): void {


    this.router.events.subscribe((valu: any) => {
      if (valu.url) {
        console.log("route event.......", valu.url)
      }

      // && this.valu.url.includes('seller')
      if (localStorage.getItem('seller')) {
        let sellerStore = localStorage.getItem('seller');
        let sellerData = sellerStore && JSON.parse(sellerStore)
        console.log("sellerData...", sellerData)
        this.sellerName = sellerData.fullName;
        this.menuType = 'seller'
        // console.log("this is seller area")
      }
      else if (localStorage.getItem('user')) {
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore)
        this.userNames = userData.userName;
        console.log("username", this.userNames)
        this.menuType = 'user'
      }
      else {
        this.menuType = 'default'
        // console.log("outside to seller area")
      }
    })


  let cartData=localStorage.getItem('localcart')
if(cartData){
  this.cartItem=JSON.parse(cartData).length
}
this.productt.cartData.subscribe((items)=>{
this.cartItem=items.length

})

  }

  logOut() {
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
  }

  userLogOut() {

    localStorage.removeItem('user')
    this.router.navigate(['/'])
  }
  searchProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      // console.log("element", element.value)
      this.productt.searchProduct(element.value).subscribe((result) => {
        // console.log("result", result)
        this.searchPro = result;
      })
    }
  }

  hideSearch() {
    this.searchPro = undefined
  }


  redirectPage(id: number) {
    this.router.navigate(['/detail-page' + id])

  }


  submitSearch(submitSearch: string) {

    console.log("check value", submitSearch)
    this.router.navigate([`search/:${submitSearch}`])
  }
}
