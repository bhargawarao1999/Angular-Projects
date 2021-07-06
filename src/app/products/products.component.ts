import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent
{
  filteredString : string='';
  sortedString : any='a-z';
  productsArray:any = []
  errMsg:any;
  constructor(productService:ProductService)
  {
    productService.getProductInfo().subscribe(
      result => this.productsArray = result,
      error => this.errMsg = error)

  }
  
}

