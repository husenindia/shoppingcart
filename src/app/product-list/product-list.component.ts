import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list', 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  constructor( 
    private cartService: CartService 
  ) { }
  addToCart(product){
    this.cartService.addToCart(product);
    //window.alert('Successful ! Product added to Cart from the product List page');
  }

  share() {
    window.alert('The product has been shared!');
  }

    onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/