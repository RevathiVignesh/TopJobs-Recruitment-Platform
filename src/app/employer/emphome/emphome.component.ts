import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/services/login.model';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {
  errorMessage: string = ''; 
  constructor(private router:Router,
    private employer:EmployerService
  ) { }

  ngOnInit(): void {
  }
  gotoempreg(){
    this.router.navigate(['empreg']);
   }
   addvalidationemp(myForm1:any){
    let newlogin:login={
      emailid:myForm1.value.Lemail,
      password:myForm1.value.Lpassword,
    }
    this.employer.validateUser(newlogin.emailid, newlogin.password).subscribe(isValid => {
      if (isValid) {
        // Login successful
        this.router.navigate(['empmain', newlogin.emailid])
        // Implement your login success logic here
      } else {
        // Login failed
        this.errorMessage = 'Incorrect username or password';
        // Implement your login failure logic here
      }
   });
  }
}
