import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products : any[] = [];

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((result:any) => {
      this.products = result;
    })
  }
}
