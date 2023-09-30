import { Component } from '@angular/core';
import { Food } from '../shared/model/food';
import { ActivatedRoute , Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';


@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
food!:Food;

constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService,
  private cartService: CartService, private router:Router
){
  activatedRoute.params.subscribe(params =>{
    if(params['id'])
    this.food = foodService.getFoodById(params['id']);
  })
 
}
addToCart(){
   this.cartService.addTOCart(this.food); 
   this.router.navigateByUrl('cart-page');
}
}
