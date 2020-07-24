import {User} from "./user";
import {Payment} from "./payment";
import {Order} from "./order";

export class Invoce {
  id:number;
  number : string;
  invoceTotal : number;
  invoceDate: Date;
  dueDate : Date;
  paymentDate: Date;
  client : User;
  payments : Payment;
  order : Order;


}
