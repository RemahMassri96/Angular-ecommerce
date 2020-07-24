import {User} from "./user";
import {Invoce} from "./invoce";
import {PaymentMethods} from "../enums/payment-methods.enum";

export class Payment {
  id: number;
  client :User;
  date :Date;
  amount : number;
  paymentMethod : PaymentMethods ;
  invoice :Invoce;


}
