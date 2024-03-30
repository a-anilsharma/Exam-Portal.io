import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';


export const adminGuard: CanActivateFn = (route, state) => {
const login=inject(LoginService);
const _router=inject(Router);
  if(login.isLoggedIn()&&login.getUserRole()=='ADMIN'){

    return true;
  }else{
    _router.navigate(["login"]);
    return false;
  }

  
};
