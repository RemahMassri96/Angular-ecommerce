import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ErrorHandler} from "../../shared/error-handler";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Profile} from "../../models/profile";
import {Cart} from "../../models/cart";
import {CartItem} from "../../models/cart-item";
import {UserData} from "../../models/user-data";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient , private router :Router) { }

  private registerUrl = `http://localhost:4200/auth/register`;
  private loginUrl = `http://localhost:4200/auth/login`;
  private userUrl = `http://localhost:4200/auth/current-user`;
  private profileUrl = `http://localhost:4200/profile`;
  private usersUrl = `http://localhost:4200/auth/system-users`;
  private userDataUrl = `http://localhost:4200/auth/user-main-data`;
  private imageChangeUrl = `http://localhost:4200/profile/userProfile/changeProfileImage`;
  private newImageUrl = `http://localhost:4200/profile/userProfile/setProfileImage`;
  private contactUrl  = `http://localhost:4200/contacts/new-mail`;
  private errorHandler : ErrorHandler = new ErrorHandler();

  public currentUser : User;
  public profile : Profile;
  public cart :Cart;
  public cartItem : CartItem;
  public userName : string;

  register(data:any) : Observable<any>{
    try{
     return this.http.post<any>(this.registerUrl,data)
    }catch (error) {
      this.errorHandler.handleError(error);

    }
  }

  pUserData(){
    if(this.isLoggedIn()){
      this.prepareUserData().subscribe((uData)=> {
          this.profile = uData.profile;
          this.userName = `${uData.profile.firstName} ${uData.profile.lastName}`;
          this.cart = uData.cart;
          this.cartItem = uData.cartItem;
        });
      this.getCurrentUser().subscribe(resUser=>{
        this.currentUser = resUser;
      });
    }
  }

  login(data:any) : Observable<any>{
    try{
      return this.http.post<any>(this.loginUrl,data)
    }catch (error) {
      this.errorHandler.handleError(error);

    }
  }

  userLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  prepareUserData() : Observable<UserData>{
    try{
      return this.http.get<UserData>(this.userDataUrl);
    }catch (error) {
      this.errorHandler.handleError(error);

    }
  }

  messageContact(messageForm : any) : Observable<void>{
    try{
      return this.http.post<void>(this.contactUrl ,messageForm );
    }catch (error) {
      this.errorHandler.handleError(error);

    }

  }

  getCurrentUser(){
    try{
      return this.http.get<any>(this.userUrl);
    }catch (error) {
      this.errorHandler.handleError(error);

    }

  }

  getSystemUsers() :Observable<User[]>{
    try{
      return this.http.get<User[]>(this.usersUrl);
    }catch (error) {
      this.errorHandler.handleError(error);

    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserProfile() : Observable<Profile>{
    try{
      return this.http.get<Profile>(this.profileUrl);
    }catch (error) {
      this.errorHandler.handleError(error);

    }
  }

}
