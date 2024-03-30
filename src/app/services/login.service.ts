import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  //Generate Tokeon
  public generateToken(logindata: any) {
    const baseUrl = 'http://localhost:8080/';
    return this.http.post(baseUrl + 'generate-token', logindata);

  }
//get Current User
public getCurrentUser() {
  const baseUrl = 'http://localhost:8080/';
  return this.http.get(baseUrl + 'current-user');

}
  // Login user: set token in Local storage

  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }
  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenstr = localStorage.getItem("token");
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      return false;
    } else {
      return true;
    }
  }

  //Logout: remove token from local storage
  public logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem("token");
  }

  //set user details
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));


  }
  //get user
  public getUser() {
    let user = localStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);

    }
    else {
      return null;
    }
  }
  //get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
