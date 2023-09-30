import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return  this.getAll().find(food=>food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
   return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  

  getAllTags():Tag[]{
   return[
    { name:'All',count:22},
    { name:'indian',count:4},
    { name:'chinese',count:6},
    { name:'breads',count:3},
    { name:'beverages',count:4},
    { name:'Deserts',count:3},
    { name:'soup',count:2}
   ]
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"? 
    this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag))
  }
  getAll():Food[]{
     return[
             {
              id:1,
              name:'Arabian Grape',
              price:90,
              favorite:true,
              stars:4.5,
              imageUrl:'assets/img/Grape-Juice.jpg',
              tags:['juice','beverages'],
              cookTime:'5-10min',
              Origins:'Dubai'
            },
            {
              id:2,
              name:'blueberry',
              price:130,
              favorite:true,
              stars:4.1, 
              imageUrl:'assets/img/blue mojito.jpg',
              tags:['mojito','beverages'],
              cookTime:'10-15min',
              Origins:'New York'
            },
            {
              id:3,
              name:'lemon',
              price:70,
              favorite:true,
              stars:3,
              imageUrl:'assets/img/lomen mojito.jpg',
              tags:['mojito','beverages'],
              cookTime:'5-10min',
              Origins:'Philipines'
            },
             {
              id:4,
              name:'mango',
              price:65,
              favorite:false,
              stars:3.4,
              imageUrl:'assets/img/mango.jpg',
              tags:['juice','beverages'],
              cookTime:'10-15min',
              Origins:'Europe'
             },
             {
              id:5,
              name:'brownie',
              price:150,
              favorite:true,
              stars:4.7,
              imageUrl:'assets/img/brownieicecream.jpeg',
              tags:['Deserts','icecream'],
              cookTime:'15-20min',
              Origins:'Italy'
             },
             {
              id:6,
              name:'gulab icecream',
              price:140,
              favorite:true,
              stars:4.1,
              imageUrl:'assets/img/gulab.jpg',
              tags:['Deserts','icecream'],
              cookTime:'5-10min',
              Origins:'India'
             },
             {
              id:7,
              name:'falooda',
              price:160,
              favorite:true,
              stars:4.3,
              imageUrl:'assets/img/Falooda-Fruit-Mix.jpg',
              tags:['Deserts','icecream'],
              cookTime:'15-20min',
              Origins:'USA'
             },
             {
              id:8,
              name:'chapathi',
              price:40,
              favorite:false,
              stars:3.5,
              imageUrl:'assets/img/chapati.jpg',
              tags:['breads','rotti'],
              cookTime:'5-10min',
              Origins:'India'
             },
             {
              id:9,
              name:'naan',
              price:50,
              favorite:true,
              stars:3.9,
              imageUrl:'assets/img/naan-3.jpg',
              tags:['breads','rotti'],
              cookTime:'5-10min',
              Origins:'North India'
             },
             {
              id:10,
              name:'parotta',
              price:40,
              favorite:true,
              stars:3.6,
              imageUrl:'assets/img/parotta.jpg',
              tags:['breads','rotti'],
              cookTime:'5-10min',
              Origins:'kerala,India'
             },
             {
              id:11,
              name:'butter chicken masala',
              price:230,
              favorite:true,
              stars:4.8,
              imageUrl: 'assets/img/chicken masala.jpg',
              tags:['indian','gravy'],
              cookTime:'15-20min',
              Origins:'India'
             },
             {
              id:12,
              name:'Gobimanchurian',
              price:190,
              favorite:false,
              stars:4.6,
              imageUrl:'assets/img/Gobi Manchurian.JPG',
              tags:['indian','gravy'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:13,
              name:'mutton pepper',
              price:290,
              favorite:true,
              stars:4.7,
              imageUrl: 'assets/img/mpepper masala.jpg',
              tags:['indian','gravy'],
              cookTime:'20-25min',
              Origins:'India'
             },
             {
              id:14,
              name:'panner masala',
              price:180,
              favorite:true,
              stars:4.6,
              imageUrl:'assets/img/panner masala.jpg',
              tags:['indian','gravy'],
              cookTime:'15-20min',
              Origins:'India'
             },
             {
              id:15,
              name:'chicken rice',
              price:170,
              favorite:true,
              stars:3.6,
              imageUrl:'assets/img/cfriedrice.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:16,
              name:'mutton rice',
              price:240,
              favorite:true,
              stars:4.8,
              imageUrl:'assets/img/mfriedrice.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'20-25min',
              Origins:'China'
             },
             {
              id:17,
              name:'chicken noodles',
              price:180,
              favorite:false,
              stars:3.9,
              imageUrl:'assets/img/chickennoodle.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:18,
              name:'mutton noodles',
              price:240,
              favorite:true,
              stars:4.8,
              imageUrl:'assets/img/mnoodles.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:19,
              name:'veg rice',
              price:140,
              favorite:false,
              stars:3.8,
              imageUrl:'assets/img/vfriedrice.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:20,
              name:'veg noodles',
              price:140,
              favorite:true,
              stars:4.8,
              imageUrl:'assets/img/vnoodles.jpg',
              tags:['chinese','friedrice','noodles'],
              cookTime:'15-20min',
              Origins:'China'
             },
             {
              id:21,
              name:'non-veg soup',
              price:140,
              favorite:true,
              stars:4.1,
              imageUrl:'assets/img/nonveg soup.jpg',
              tags:['starter','soup'],
              cookTime:'10-15min',
              Origins:'Germany'
             },
             {
              id:22,
              name:'veg soup',
              price:190,
              favorite:true,
              stars:4.8,
              imageUrl:'assets/img/veg soup.jpg',
              tags:['starter','soup'],
              cookTime:'10-15min',
              Origins:'US'
             }             
     ]
  }
}