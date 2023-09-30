import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
 cart!:Cart;
  constructor(private cartService:CartService){
   this.SetCart();

  
  }

  removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id);
this.SetCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.SetCart();
  }
  SetCart(){
    this.cart = this.cartService.getCart();
  }
}
