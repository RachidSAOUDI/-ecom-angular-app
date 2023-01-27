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
  public loading: boolean = false;

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe((result:any) => {
      this.products = result;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert(error.message)
    })
  }

  getCategories() {
    this.loading = true;
    this.productService.getAllCategories().subscribe((result:any) => {
      this.categories = result;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert(error.message)
    })
  }

  filterCatgory(event: any) {
    let value = event.target.value;
    if (value=="all"){
      this.getProducts();
    } else {
      this.getProductsByCategory(value);
    }
  }

  getProductsByCategory(keyword:string) {
    this.loading = true;
    this.productService.getProductsByCategory(keyword).subscribe((result:any)=>{
      this.loading = false;
      this.products = result;
    })
  }

  receiveCategory(event: any) {

  }
}
