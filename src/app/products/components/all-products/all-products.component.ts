import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products : any[] = [];
  public categories : any[] = [];

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((result:any) => {
      this.products = result;
    }, error => {
      alert(error.message)
    })
  }

  getCategories() {
    this.productService.getAllCategories().subscribe((result:any) => {
      this.categories = result;
    }, error => {
      alert(error.message)
    })
  }

  filterProductByCatgory(event: any) {
    let value = event.target.value;
    if (value=="all"){
      this.getProducts();
    } else {
      this.getProductsByCategory(value);
    }
  }

  getProductsByCategory(keyword:string) {
    this.productService.getProductsByCategory(keyword).subscribe((result:any)=>{
      this.products = result;
    })
  }
}
