import {Profile} from "./profile";
import {Order} from "./order";
import {Invoce} from "./invoce";
import {Payment} from "./payment";

export class User {
  id: number;
  userName : string;
  password : string;
  isAdmin : boolean;
  profile : Profile;
  orders : Order[];
  invoices : Invoce[];
  payments : Payment[];

}
