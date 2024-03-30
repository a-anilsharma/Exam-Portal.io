import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

public categorydata={

  title:'',
  description:''
}

constructor(private categoryService:CategoryService,private snack:MatSnackBar){
}


public saveCategory(){


  if(this.categorydata.title.trim()==''|| this.categorydata.title==null){
    //alert("User name is required!!");
    this.snack.open("Title is required!!","OK",{
      duration:3000,
      verticalPosition:'top', 
    });
    return;
  }
  if(this.categorydata.description.trim()==''|| this.categorydata.description==null){
    //alert("User name is required!!");
    this.snack.open("Description is required!!","OK",{
      duration:3000,
      verticalPosition:'top', 
    });
    return;
  }
this.categoryService.addCategory(this.categorydata).subscribe( (data:any)=>{
      console.log(data);
        this.categorydata.title='';
        this.categorydata.description='';

       },(error:any)=>{      console.log(error); })


Swal.fire({
      title: 'Success!!',
      text:'The Category has been created succussfully!! ',
      icon: 'success',
      confirmButtonText: 'OK'
    })

}


}
