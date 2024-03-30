import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  ngOnInit(): void {
    this.getAllCategories();


      }

constructor(public service:CategoryService ){
 

}
 categories=[];

  public getAllCategories(){
    this.service.loadAllCategories().subscribe((data:any)=>{
    this.categories=data;
      console.log(data);
    },(error:any)=>{
      console.log(error);
    }
);

  }
}
