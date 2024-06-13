import { Component, OnInit } from '@angular/core';
import {JobseekerService} from 'src/app/services/jobseeker.service'
import { jsdetails } from 'src/app/services/jsdetails.model';
import { Router } from '@angular/router';
import { login } from 'src/app/services/login.model';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-jsreg',
  templateUrl: './jsreg.component.html',
  styleUrls: ['./jsreg.component.css']
})
export class JsregComponent implements OnInit {

  constructor(private jobseeker:JobseekerService,
    private login:LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }
  addjobseeker(myForm:any){
    
    let newjobseeker:jsdetails={
      jsId:0,
      jsName:myForm.value.JsName,
      jsCountry:myForm.value.JsCountry,
      jsState:myForm.value.JsState,
      jsCity:myForm.value.JsCity,
      jsPhoneNo:myForm.value.JsPhone,
      jsGender:myForm.value.JsGender,
      jsEmail:myForm.value.JsEmail,
      jsPassword:myForm.value.JsPassword,
      
    }

    this.jobseeker.addjobseeker(newjobseeker).subscribe({
     next:(response)=>{this.router.navigate(['home'])},
     error:(err)=>{console.log(err)}
   })
   
  }
  addlogin(myForm:any){
    let newlogin:login={
      emailid:myForm.value.JsEmail,
      password:myForm.value.JsPassword,
    }
    this.login.addlogin(newlogin).subscribe({
      next:(response)=>{this.router.navigate(['jobseeker/jshome'])},
      error:(err)=>{console.log(err)}
    })
  }
}
