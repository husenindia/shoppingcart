import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    })
  }
  
  clearCart() {
     this.items = this.cartService.clearCart();
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerDate) {
    //this.clearCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerDate);
  }


}