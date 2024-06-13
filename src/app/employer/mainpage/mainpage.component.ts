import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { empdetails } from 'src/app/services/empdetails.model';
import { Router } from '@angular/router';
import { application } from 'src/app/services/application.model';
import { ApplicationsService } from 'src/app/services/applications.service';
import { jsdetails} from 'src/app/services/jsdetails.model';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { job } from 'src/app/services/job.model';
import { JobsService } from 'src/app/services/jobs.service';
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
  allapplication:application[]=[];
  alljobseeker:jsdetails[]=[];
  alljobs:job[]=[];
  constructor(private activatedRoute:ActivatedRoute,
    private employer:EmployerService,private router:Router,
    private appservice:ApplicationsService,
    private jsservice:JobseekerService,
    private jobservice:JobsService
  ) { }
loaddata(){
  this.appservice.getapplication().subscribe({
    next:(response)=>{
      this.allapplication=response;
      console.log("Application:",response);
    },
    error:(err)=>{
      console.log(err);
    }

})
this.jsservice.getjobseeker().subscribe({
  next:(response)=>{
    this.alljobseeker=response;
    console.log("Js is",response);
  },
  error:(err)=>{
    console.log(err);
  }
})
this.jobservice.getjob().subscribe({
  next:(response)=>{
    this.alljobs=response;
    console.log("Job is",response);
  },
  error:(err)=>{
    console.log(err);
  }
})
let email=this.activatedRoute.snapshot.paramMap.get('empemail');
    if(email!=null)
      this.employer.getemployerbyemail(email).subscribe({
        next: (response) => {
          console.log('API response:', response);
          this.employerdet = response;
          console.log('Employerdet updated:', this.employerdet);
          console.log("ID is",this.employerdet.employeeID);

        },
        error: (err) => console.log('Error occurred:', err)
      });
}
  ngOnInit(): void {
    this.loaddata();
    }

  gotoform(){
    let email=this.activatedRoute.snapshot.paramMap.get('empemail');
    if(email!=null)
      this.employer.getemployerbyemail(email).subscribe({
        next: (response) => {
          console.log('API response:', response);
          this.employerdet = response;
          console.log('Employerdet updated:', this.employerdet);
          console.log("ID is",this.employerdet.employeeID);
    this.router.navigate(['jobform', this.employerdet.employeeID]);
        },
        error: (err) => console.log('Error occurred:', err)
      });
   }
   mydetails(){

   }
   shortlist(jsid:number){

   }
}
