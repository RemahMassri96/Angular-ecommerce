import {Category} from "./categorty";
import {CartItem} from "./cart-item";
import {OrderItem} from "./order-item";

export class Product {
  id : number;
  name : string;
  description : string;
  price :number;
  publishedIn : Date;
   addedToCart : boolean;
   quantity : number;
   cartQuantity : number;
   image :string;
   category : Category;
   cartItem : CartItem;
   orderItems :OrderItem[];

}
