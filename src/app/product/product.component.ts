import { Component} from '@angular/core';
import { ProductClass } from '../model/product-class.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  productclass: ProductClass[] = [
    new ProductClass(1, "john", "sedwik", 5000),
    new ProductClass(2, "Ram", "Kumar", 6000),
    new ProductClass(3, "Fran", "andrew", 100)
  ];
}
