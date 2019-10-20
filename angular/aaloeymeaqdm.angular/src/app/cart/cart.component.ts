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
    private formBulider: FormBuilder,
  ) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBulider.group({
      name:'',
      address:''
    })
  }

  onSubmit(customerData){
    console.log('submit');
    console.warn("your order has been submitted",customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  } 
  
  ngOnInit() {
  }

}
