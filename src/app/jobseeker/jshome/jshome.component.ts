import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { login } from 'src/app/services/login.model';
@Component({
  selector: 'app-jshome',
  templateUrl: './jshome.component.html',
  styleUrls: ['./jshome.component.css']
})
export class JshomeComponent implements OnInit {
  errorMessage: string = ''; 
  constructor(private logins:LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }
  gotojsreg(){
   this.router.navigate(['jsreg']);
  }
  addvalidation(myForm1:any){
    let newlogin:login={
      emailid:myForm1.value.Lemail,
      password:myForm1.value.Lpassword,
    }
    
    this.logins.validateUser(newlogin.emailid, newlogin.password).subscribe(isValid => {

      if (isValid) {
        // Login successful
        
        this.router.navigate(['jsmain', newlogin.emailid]);
        // Implement your login success logic here
      } else {
        // Login failed
        this.errorMessage = 'Incorrect username or password';
        // Implement your login failure logic here
      }
    });
  }
}
