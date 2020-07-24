import {Product} from "./product";
import {Order} from "./order";

export class OrderItem {
  id:number;
  unitPrice:number;
  quantity : number;
  totalPrice : number;
  product : Product;
  order : Order;
  productId : number;
  orderId : number;

}
