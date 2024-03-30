import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';
export const userGuard: CanActivateFn = (route, state) => {
  const login=inject(LoginService);
  const _router=inject(Router);
    if(login.isLoggedIn()&&login.getUserRole()=='NORMAL'){
     
      return true;
    }else{
      _router.navigate(["login"]);
      return false;
    }
  

};
