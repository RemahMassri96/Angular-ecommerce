import {HttpErrorResponse} from "@angular/common/http";

export  class ErrorHandler{

  handleError(errorResponse: HttpErrorResponse){
   if(errorResponse.error instanceof  ErrorEvent){
     console.error('client side error :' + errorResponse.error.message );
     console.error('Server Side Error:' + errorResponse)

   } else{
     return alert('please refresh the website again, maybe there are problem with the server!!');
   }
  }
}
