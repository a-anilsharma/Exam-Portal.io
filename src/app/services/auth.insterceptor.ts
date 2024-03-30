import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private loginservice: LoginService) { 
      
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
       // add jwt token(localstorage) in request
       
        let authReq=req;
        const token=this.loginservice.getToken();
        console.log('Inside Interceptor');
        if(token!=null){
            console.log(token);
            let newtok='Bearer '+token;
            console.log(newtok);
            authReq=authReq.clone({setHeaders:{ Authorization: `Bearer ${token}`}});

        }
      
        return next.handle(authReq);
            
          }
 
}

export const authInterceptorProviders=[
{
  provide:HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi:true,
}
];