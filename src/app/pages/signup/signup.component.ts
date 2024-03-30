import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

// CommonJS
//const Swal1 = require('sweetalert2')

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private userService:UserService, private snack:MatSnackBar){


  } 
public user= {
username:'',
password:'',
firstname:'',
lastname:'',
email:'',
phoneno:'',


};
  ngOnInit(): void {
    
  }


  formSubmit()
  { 
    if(this.user.username==''|| this.user.username==null){
      //alert("User name is required!!");
      this.snack.open("User name is required!!","OK",{
        duration:3000,
        verticalPosition:'top', 

      });
      
      return;

    }
    console.log(this.user)  ;
    this.userService.addUser(this.user).subscribe( (data:any)=>{
      console.log(data);
        //succuss
     // alert("Submited");
     Swal.fire({
      title: 'Success!!',
      text: 'Hello '+data.firstname+''+data.lastname+'! You has been registered succussfully!! ',
      icon: 'success',
      confirmButtonText: 'OK'
    })

    },(error)=>{

      //error
      //console.log(error);
      //alert("Error");
      this.snack.open("Something went wrong!!","OK",{
        duration:3000,
      })
    }

    );
    
  }

}
