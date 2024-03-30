import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private snack:MatSnackBar, private  loginservice:LoginService){
  } 
  ngOnInit(): void {
    
  }


  public logindata={
    username:'',
    password:'',

  };
public formSubmit(){
  if(this.logindata.username.trim()==''|| this.logindata.username==null){
    //alert("User name is required!!");
    this.snack.open("User name is required!!","OK",{
      duration:3000,
      verticalPosition:'top', 

    });
    
    return;

  }
  
  if(this.logindata.password.trim()==''|| this.logindata.password==null){
    //alert("User name is required!!");
    this.snack.open("Password is required!!","OK",{
      duration:3000,
      verticalPosition:'top', 

    });
    
    return;

  }
  //request to server to generate token
   this.loginservice.generateToken(this.logindata).subscribe({
    next: (data:any) => {
      console.log(data);
      //login
      this.loginservice.loginUser(data.token);
      this.loginservice.getCurrentUser().subscribe( (user:any)=>{
        console.log(user);
        this.loginservice.setUser(user);
        console.log(this.loginservice.getUserRole)
        if(this.loginservice.getUserRole()=='ADMIN'){
          //redirect to Admin dashboard
          window.location.href='/admin-dashboard';

        } else if(this.loginservice.getUserRole()=='NORMAL'){
          //redirect to Normal dashboard
          window.location.href='/user-dashboard/0';

        }else{
          this.snack.open("Invaild User Details!!","OK",{
            duration:3000,
            verticalPosition:'top', 
      
          });
        }
        
        
        
      }



      );
    
    
    },
    error: (e) =>{console.error(e);
      this.snack.open("Invaild User Details!!","OK",{
        duration:3000,
        verticalPosition:'top', 
  
      });
    
    } 

   });






  
}




}
