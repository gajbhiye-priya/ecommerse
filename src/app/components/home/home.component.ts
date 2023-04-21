import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

trendingPro:any=[];

  constructor(private productt:ProductService){}
  ngOnInit(): void {

 this.productt.trendingProduct().subscribe((data)=>{
 this.trendingPro=data;

 })
 

    throw new Error('Method not implemented.');
  }

}
