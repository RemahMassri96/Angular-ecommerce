import {OrderStatus} from "../enums/order-status.enum";
import {User} from "./user";
import {OrderItem} from "./order-item";
import {Invoce} from "./invoce";

export class Order {
  id : number;
  orderDate: Date;
  status : OrderStatus;
  shipmentDate : Date;
  comments :string;
  shipTo: string;
  user : User;
  orderItems : OrderItem[];
  invoice : Invoce;
  invoiceId : number;




}
