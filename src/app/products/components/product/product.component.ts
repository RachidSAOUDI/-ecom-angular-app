import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: any = {}
  @Output() item = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.item.emit(this.data)
  }
}
