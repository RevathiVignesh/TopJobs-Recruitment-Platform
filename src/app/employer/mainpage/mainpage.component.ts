import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { empdetails } from 'src/app/services/empdetails.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  employerdet:empdetails={
    employeeID:0,
    employeeName:"",
    employeeCompany:"",
    employeeCountry:"",
    employeeState:"",
    employeeCity:"",
    employeePhoneNo:"",
    employeeEmail:"",
    employeePassword:""
  }
  constructor(private activatedRoute:ActivatedRoute,
    private employer:EmployerService,private router:Router
  ) { }

  ngOnInit(): void {
    let email=this.activatedRoute.snapshot.paramMap.get('empemail');
    if(email!=null)
      {
    this.employer.getemployerbyemail(email).subscribe({
      next:(response)=>{this.employerdet=response},
      error:(err)=>console.log(err)
    })
  }
  }
  gotoform(){
    this.router.navigate(['jobform']);
   }

}
