import { Component, OnInit } from '@angular/core';
import { Food } from "../../model/food";
import { Drinks } from "../../model/drinks";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  food: Food[] = [{
    name: 'Fish Balls',
    ingredients: ['Eggs',' Ground Meat',' Garlic',' Salt', ' Soy Sauce', ' Onion', ' Spring Onion', ' Fish Fillet'],
    price: 22
  },{
    name: 'Laksa',
    ingredients: [' Chilli', ' Fish Sauce', ' Garlic', ' Ginger', ' Coconut Milk', ' Lemmongrass', ' Chicken', ' Laksa', ' Chiken Broth'],
    price: 23
  },{
    name: 'Hainanese Chicken',
    ingredients: [' Rice', ' Chicken', ' Chili Pepper', ' Ginger', ' Soy Sauce', ' Garlic', ' Roast Chicken', ' Spring Onion', ' Salt', ' Bouillon', ' Jasmine Rice', ' Stock', ' Sesame Oil'],
    price: 23
  },{
    name: 'Spring Rolls',
    ingredients: [' Sauce', ' Vegetable', ' Frying', ' Rice Paper', ' Ground Meat', ' Cabbage', ' Soy Sauce', ' Beansprouts', ' Carrot', ' Spring Onion'],
    price: 23
  },{
    name: 'Dim Sum',
    ingredients: [' Shrimp', ' Soy Sauce', ' Salt', ' Garlic', ' Spring Onion', ' Carrot', ' Ground Meat', ' Ginger', ' Wonton Wrappers'],
    price: 23
  },{
    name: 'Tom Yum',
    ingredients: [' Thai Cousin', ' Prawns', ' Chili Pepper', ' Fish Sauce', ' Galangal', ' Tomato', ' Coriander', ' Kaffir Lime', ' Ginger', ' Ginger'],
    price: 23
  },{
    name: 'Chicken Curry',
    ingredients: [' Chicken', ' Coconut Milk', ' Chili Pepper', ' Curry Powder', ' Onion', ' Tomato', ' Garlic', ' Ginger', ' Coriander', ' Garam Masala', ' Ground Meat', ' Cumin', ' Salt', ' Chili Powder'],
    price: 23
  },{
    name: 'Sushi',
    ingredients: [' Rice', ' Nori', ' Wasabi', ' Avocado', ' Soy Sauce', ' Cucumber', ' Rice Vinegar', ' Sesame', ' Sushi Rice', ' Gari'],
    price: 23
  },{
    name: 'Satay',
    ingredients: [' Sauce', ' Sauce', ' Peanut', ' Chili Pepper', ' Coconut Milk', ' Garlic', ' Soy Sauce', ' Coriander', ' Curry Powder'],
    price: 23
  }];

  driks: Drinks[] = [{
    name : 'Soda',
    price: 2
  },{
    name : 'Indian Soda',
    price: 3
  },{
    name : 'Mango Lassi',
    price: 3
  },{
    name : 'Masala Chai',
    price: 2
  },{
    name : 'San Pellegrino',
    price: 5
  },{
    name : 'Acqua Panna',
    price: 5
  }];

  alcoholic: Drinks[] = [{
    name : 'Indian Craft Beer',
    price: 8
  },{
    name : 'Anthony Road, Chardonnay Wine',
    price: 10
  },{
    name : 'Honey Wit',
    price: 10
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
