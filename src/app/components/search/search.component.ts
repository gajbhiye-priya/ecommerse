import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchResult:any=[]

  constructor(private activeRoute:ActivatedRoute, private productt:ProductService){}
  ngOnInit(): void {

    let query= this.activeRoute.snapshot.paramMap.get('query');
    
    console.log("getquery",query)
    console.log("search are is working")
    query && this.productt.searchProduct(query).subscribe((res)=>{
console.log("query result",res)
 this.searchResult=res

   })   


  }

}
