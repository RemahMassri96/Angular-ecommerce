import {Product} from "./product";
import {Cart} from "./cart";

export class CartItem {
  id : number;
  totalProducts:number;
  products : Product[];
  cart :Cart;



}
