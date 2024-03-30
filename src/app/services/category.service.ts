import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  public loadAllCategories(){
    return this._http.get('http://localhost:8080/category/');

  }

  public addCategory(categoryData:any){
     return this._http.post('http://localhost:8080/category/',categoryData);
  }
}
